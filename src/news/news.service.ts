import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private newsRepository: Repository<News>,
  ) {}

  async getAllNews(): Promise<News[]> {
    return this.newsRepository.find();
  }

  async createNews(newsData: News): Promise<News> {
    return this.newsRepository.save(newsData);
  }
}
