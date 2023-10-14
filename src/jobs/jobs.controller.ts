import { Controller, Get, Post, Body } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './entities/job.entity';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  async findAll(): Promise<Job[]> {
    return this.jobsService.findAll();
  }

  @Post()
  async create(@Body() job: Job): Promise<Job> {
    return this.jobsService.create(job);
  }
}
