import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class WelcomeEmailService {
  async sendWelcomeEmail(user: UserEntity) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 587,
      secure: false,
      auth: {
        user: 'contato@helpstudent.com.br',
        pass: process.env.PASSWORD_EMAIL,
      },
    });

    const imageUrl =
      'https://helpstudent.s3.amazonaws.com/Emails/boas_vindas_help_students.png';

    const mailOptions = {
      from: 'contato@helpstudent.com.br',
      to: user.email,
      subject: 'Bem-vindo ao HelpStudents',
      html: `
        <img src="${imageUrl}" alt="Bem-vindo" width="1414" height="2000" />
      `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error('Erro ao enviar o email de boas-vindas:', error);
      } else {
        console.log('Email de boas-vindas enviado com sucesso:', info.response);
      }
    });
  }
}
