import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exam } from './entities/exam.entity';

@Controller('exams')
export class ExamsController {
  constructor(
    @InjectRepository(Exam)
    private readonly examRepository: Repository<Exam>,
  ) {}

  @Get()
  async findAll(): Promise<Exam[]> {
    return this.examRepository.find();
  }
}
