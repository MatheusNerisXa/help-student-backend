import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
  Get,
  Param,
} from '@nestjs/common';
import { FilesAndPhotosService } from './files-and-photos.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileEntity } from './entities/file.entity';

@Controller('files-and-photos')
export class FilesAndPhotosController {
  constructor(private readonly filesAndPhotosService: FilesAndPhotosService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: any,
    @Body('disciplineId') disciplineId: number,
    @Body('fileDescription') fileDescription: string,
  ): Promise<FileEntity> {
    const fileEntity = await this.filesAndPhotosService.uploadFile(
      file,
      disciplineId,
      fileDescription,
    );
    return fileEntity;
  }

  @Get(':disciplineId/files')
  async getFilesByDiscipline(
    @Param('disciplineId') disciplineId: number,
  ): Promise<FileEntity[]> {
    return this.filesAndPhotosService.getFilesByDiscipline(disciplineId);
  }
}
