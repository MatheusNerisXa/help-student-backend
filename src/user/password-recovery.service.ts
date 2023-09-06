import { Injectable, NotFoundException } from '@nestjs/common';
import { hash } from 'bcrypt';
import * as nodemailer from 'nodemailer';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PasswordRecoveryService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async generateRandomPassword(length: number): Promise<string> {
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    return password;
  }

  async updateUserPassword(userEmail: string, newPassword: string) {
    const user = await this.userRepository.findOne({
      where: { email: userEmail },
    });
    if (!user) {
      throw new NotFoundException(
        `Usuário com email ${userEmail} não encontrado`,
      );
    }

    const saltOrRounds = 10;
    const passwordHash = await hash(newPassword, saltOrRounds);
    user.password = passwordHash;

    await this.userRepository.save(user);
  }
  async sendPasswordEmail(userEmail: string, newPassword: string) {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'matheusneris2011@gmail.com',
        pass: process.env.PASSWORD_EMAIL,
      },
    });

    const mailOptions = {
      from: 'matheusneris2011@gmail.com',
      to: userEmail,
      subject: 'Recuperação de Senha',
      text: `Sua nova senha é: ${newPassword}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error('Erro ao enviar o email:', error);
      } else {
        console.log('Email enviado com sucesso:', info.response);
      }
    });
  }
}
