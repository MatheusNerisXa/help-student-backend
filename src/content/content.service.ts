import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContentEntity } from './entities/content.entity';

@Injectable()
export class ContentService {
  private readonly logger = new Logger(ContentService.name);

  constructor(
    @InjectRepository(ContentEntity)
    private readonly contentRepository: Repository<ContentEntity>,
  ) {}

  async createContent(
    matter: string,
    urlContent: string,
  ): Promise<ContentEntity> {
    this.logger.log('Creating content');

    const newContent = new ContentEntity();
    newContent.title = matter;
    newContent.urlContent = urlContent;

    return this.contentRepository.save(newContent);
  }

  async getAllContents(): Promise<ContentEntity[]> {
    return this.contentRepository.find();
  }
}
