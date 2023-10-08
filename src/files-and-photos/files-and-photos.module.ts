import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity';
import { FilesAndPhotosService } from './files-and-photos.service';
import { FilesAndPhotosController } from './files-and-photos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FileEntity])],
  providers: [FilesAndPhotosService],
  controllers: [FilesAndPhotosController],
})
export class FilesAndPhotosModule {}
