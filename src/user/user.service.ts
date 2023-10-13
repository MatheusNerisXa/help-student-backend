import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { hash } from 'bcrypt';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import { promisify } from 'util';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const existingUserByEmail = await this.findUserByEmail(
      createUserDto.email,
    ).catch(() => undefined);

    if (existingUserByEmail) {
      throw new BadRequestException('Email is already registered');
    }

    const existingUserByCpf = await this.findUserByCpf(createUserDto.cpf).catch(
      () => undefined,
    );

    if (existingUserByCpf) {
      throw new BadRequestException('CPF is already registered');
    }

    const saltOrRounds = 10;
    const passwordHash = await hash(createUserDto.password, saltOrRounds);

    return this.userRepository.save({
      ...createUserDto,
      typeUser: 1,
      password: passwordHash,
    });
  }

  async updateProfileImage(userId: number, file: any): Promise<UserEntity> {
    const user = await this.findUserById(userId);

    const uploadDirectory = 'src/files/ProfileImage';

    if (!fs.existsSync(uploadDirectory)) {
      fs.mkdirSync(uploadDirectory, { recursive: true });
    }

    const filename = `${uuidv4()}-${file.originalname}`;
    const filePath = `${uploadDirectory}/${filename}`;

    const fileStream = fs.createWriteStream(filePath);

    await promisify(fileStream.end.bind(fileStream))(file.buffer);

    user.photoImage = filePath;
    await this.userRepository.save(user);

    return user;
  }

  async getUserByIdUsingRelations(userId: number): Promise<UserEntity> {
    return this.userRepository.findOne({
      where: {
        id: userId,
      },
      relations: {
        addresses: {
          city: {
            state: true,
          },
        },
      },
    });
  }

  async getAllUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findUserById(userId: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new NotFoundException(`UserId: ${userId} Not Found`);
    }
    return user;
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      throw new NotFoundException(`Email: ${email} Not Found`);
    }
    return user;
  }

  async findUserByCpf(cpf: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({
      where: {
        cpf,
      },
    });
  }

  async findUserByName(name: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({
      where: {
        name,
      },
    });
  }

  async updateUser(
    userId: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    const user = await this.findUserById(userId);

    if (updateUserDto.email && updateUserDto.email !== user.email) {
      const existingUserWithEmail = await this.findUserByEmail(
        updateUserDto.email,
      ).catch(() => undefined);
      if (existingUserWithEmail && existingUserWithEmail.id !== userId) {
        throw new BadRequestException('Email is already registered');
      }
      user.email = updateUserDto.email;
    }

    if (updateUserDto.cpf && updateUserDto.cpf !== user.cpf) {
      const existingUserWithCpf = await this.findUserByCpf(
        updateUserDto.cpf,
      ).catch(() => undefined);
      if (existingUserWithCpf && existingUserWithCpf.id !== userId) {
        throw new BadRequestException('CPF is already registered');
      }
      user.cpf = updateUserDto.cpf;
    }

    if (updateUserDto.name && updateUserDto.name !== user.name) {
      const existingUserWithName = await this.findUserByName(
        updateUserDto.name,
      ).catch(() => undefined);
      if (existingUserWithName && existingUserWithName.id !== userId) {
        throw new BadRequestException('Name is already registered');
      }
      user.name = updateUserDto.name;
    }

    if (updateUserDto.phone) {
      user.phone = updateUserDto.phone;
    }

    await this.userRepository.save(user);

    return user;
  }
}
