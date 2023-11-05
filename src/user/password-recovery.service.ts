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

  async generateRandomPassword(): Promise<string> {
    let password = '';
    for (let i = 0; i < 6; i++) {
      const randomDigit = Math.floor(Math.random() * 10);
      password += randomDigit;
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
      host: 'smtp.hostinger.com',
      port: 587,
      secure: false,
      auth: {
        user: 'contato@helpstudent.com.br',
        pass: process.env.PASSWORD_EMAIL,
      },
    });

    const headerImageUrl =
      'https://helpstudent.s3.amazonaws.com/Emails/header_senha.png';
    const footerImageUrl =
      'https://helpstudent.s3.amazonaws.com/Emails/footer_senha.png';

    const mailOptions = {
      from: 'contato@helpstudent.com.br',
      to: userEmail,
      subject: 'Recuperação de Senha - HelpStudents',
      html: `
      <img src="${headerImageUrl}" alt="Cabeçalho" width="600" height="200" />
      <p style="color: #000;">Eiii, esqueceu sua senha? Não se preocupe! Aqui está a sua nova senha.<br>Lembre-se de não compartilhá-la com ninguém:</p>
      <p style="width: 580px; font-size: 20px; background-color: #f09d5c; color: white; padding: 10px; text-align: center;">
        ${newPassword}
      </p>
      <p style="color: #000;">Use esta senha para acessar o aplicativo HelpStudents.</p>
      <img src="${footerImageUrl}" alt="Rodapé" width="600" height="200" />          
        `,
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
