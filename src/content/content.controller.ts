import { Controller, Post, Body, Get } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentEntity } from './entities/content.entity';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Post('create')
  async createContent(
    @Body('matter') matter: string,
    @Body('urlContent') urlContent: string,
  ): Promise<ContentEntity> {
    const contentEntity = await this.contentService.createContent(
      matter,
      urlContent,
    );
    return contentEntity;
  }

  @Get('all')
  async getAllContents(): Promise<ContentEntity[]> {
    return this.contentService.getAllContents();
  }
}
