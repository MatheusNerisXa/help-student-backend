import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { PasswordRecoveryService } from './password-recovery.service';
import { WelcomeEmailService } from './welcome-email.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, PasswordRecoveryService, WelcomeEmailService],
  exports: [UserService],
})
export class UserModule {}
