import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use('/static', express.static('src/files/FilesAndPhotos'));
  app.use('/static', express.static('src/files/ProfileImage'));
  app.use('/static', express.static('src/files/CoursesImage'));

  await app.listen(8080);
}
bootstrap();
