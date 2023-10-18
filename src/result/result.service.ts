import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResultEntity } from './entities/result.entity';
import { CreateResultDto } from './dtos/create-result.dto';

@Injectable()
export class ResultService {
  constructor(
    @InjectRepository(ResultEntity)
    private resultRepository: Repository<ResultEntity>,
  ) {}

  async createResult(createResultDto: CreateResultDto): Promise<ResultEntity> {
    const newResult = this.resultRepository.create(createResultDto);
    return await this.resultRepository.save(newResult);
  }

  async findAllResults(): Promise<ResultEntity[]> {
    return await this.resultRepository.find();
  }

  async findResultsByDisciplineId(
    disciplineId: number,
  ): Promise<ResultEntity[]> {
    return this.resultRepository.find({ where: { disciplineId } });
  }
}
