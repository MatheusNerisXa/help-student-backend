import { Injectable, Logger } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import { promisify } from 'util';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileEntity } from './entities/file.entity';

@Injectable()
export class FilesAndPhotosService {
  private readonly logger = new Logger(FilesAndPhotosService.name);

  constructor(
    @InjectRepository(FileEntity)
    private readonly fileRepository: Repository<FileEntity>,
  ) {}

  private readonly uploadDirectory = 'src/files/FilesAndPhotos';

  async uploadFile(
    file: any,
    disciplineId: number,
    fileDescription: string,
  ): Promise<FileEntity> {
    this.logger.log('Iniciando upload de arquivo');

    if (!fs.existsSync(this.uploadDirectory)) {
      fs.mkdirSync(this.uploadDirectory, { recursive: true });
    }

    const filename = `${uuidv4()}-${file.originalname}`;
    const filePath = `${this.uploadDirectory}/${filename}`;

    const fileStream = fs.createWriteStream(filePath);

    await promisify(fileStream.end.bind(fileStream))(file.buffer);

    this.logger.log('Arquivo salvo localmente');

    const newFile = new FileEntity();
    newFile.disciplineId = disciplineId;
    newFile.fileName = file.originalname;
    newFile.fileUrl = filePath;
    newFile.fileDescription = fileDescription;

    const savedFile = await this.fileRepository.save(newFile);

    this.logger.log('Informações do arquivo salvas no banco de dados');

    return savedFile;
  }

  async getFilesByDiscipline(disciplineId: number): Promise<FileEntity[]> {
    return this.fileRepository.find({ where: { disciplineId } });
  }
}
