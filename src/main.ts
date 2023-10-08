import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use('/static', express.static('src/files/FilesAndPhotos')); // Substitua 'src/files/FilesAndPhotos' pelo seu diretório real

  await app.listen(8080);
}
bootstrap();
