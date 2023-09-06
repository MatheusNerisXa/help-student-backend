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
} from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { ReturnUserDto } from './dtos/returnUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';
import { PasswordRecoveryService } from './password-recovery.service';

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

  @Put(':userId')
  async updateUser(
    @Param('userId') userId: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    return this.userService.updateUser(userId, updateUserDto);
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
