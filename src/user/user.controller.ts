import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
  NotFoundException,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { ReturnUserDto } from './dtos/returnUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';
import { PasswordRecoveryService } from './password-recovery.service';
import { FileInterceptor } from '@nestjs/platform-express';

interface UpdateUserWithPhotoDto extends UpdateUserDto {
  photoImage: string;
}

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly passwordRecoveryService: PasswordRecoveryService,
  ) {}

  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUser);
  }

  @Get()
  async getAllUser(): Promise<ReturnUserDto[]> {
    return (await this.userService.getAllUser()).map(
      (userEntity) => new ReturnUserDto(userEntity),
    );
  }

  @Get('/:userId')
  async getUserById(@Param('userId') userId: number): Promise<ReturnUserDto> {
    return new ReturnUserDto(
      await this.userService.getUserByIdUsingRelations(userId),
    );
  }

  @Get('profile-image/:userId')
  async getProfileImageURL(
    @Param('userId') userId: number,
  ): Promise<{ ProfileImage: string | null }> {
    try {
      const user = await this.userService.findUserById(userId);
      if (user.photoImage) {
        const profileImageName = user.photoImage;

        const profileImageFileName = profileImageName.replace(
          'src/files/ProfileImage/',
          '',
        );

        const profileImageURL = `http://192.168.1.11:8080/static/${profileImageFileName}`;

        return {
          ProfileImage: profileImageURL,
        };
      }
      return { ProfileImage: null };
    } catch (error) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
  }

  @Put(':userId')
  async updateUser(
    @Param('userId') userId: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    return this.userService.updateUser(userId, updateUserDto);
  }

  @Put('update-profile-image/:userId')
  @UseInterceptors(FileInterceptor('file'))
  async updateProfileImage(
    @Param('userId') userId: number,
    @UploadedFile() file: any,
  ): Promise<UserEntity> {
    if (!file) {
      throw new BadRequestException('Nenhuma imagem fornecida.');
    }

    return this.userService.updateProfileImage(userId, file);
  }

  @Post('recover-password')
  async recoverPassword(@Body() body: { email: string }) {
    const { email } = body;

    const user = await this.userService.findUserByEmail(email);
    if (!user) {
      throw new NotFoundException(`Email: ${email} Not Found`);
    }

    const newPassword =
      await this.passwordRecoveryService.generateRandomPassword(10);

    await this.passwordRecoveryService.updateUserPassword(email, newPassword);

    await this.passwordRecoveryService.sendPasswordEmail(
      user.email,
      newPassword,
    );

    return {
      message:
        'Senha recuperada com sucesso. Verifique seu email para obter a nova senha.',
    };
  }
}
