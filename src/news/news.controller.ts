import { Controller, Get, Post, Body } from '@nestjs/common';
import { NewsService } from './news.service';
import { News } from './entities/news.entity';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  async getAllNews(): Promise<News[]> {
    return this.newsService.getAllNews();
  }

  @Post()
  async createNews(@Body() newsData: News): Promise<News> {
    return this.newsService.createNews(newsData);
  }
}
