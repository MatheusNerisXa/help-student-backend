import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './entities/job.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
  ) {}

  async findAll(): Promise<Job[]> {
    return this.jobRepository.find();
  }

  async create(job: Job): Promise<Job> {
    return this.jobRepository.save(job);
  }
}
