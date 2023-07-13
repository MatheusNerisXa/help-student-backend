import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DisciplineEntity } from './entities/discipline.entity';

@Injectable()
export class DisciplineService {
  constructor(
    @InjectRepository(DisciplineEntity)
    private disciplineRepository: Repository<DisciplineEntity>,
  ) {}

  async findAllAbsences(): Promise<DisciplineEntity[]> {
    const discipline = await this.disciplineRepository.find();

    if (!discipline || discipline.length === 0) {
      throw new NotFoundException('discipline empty');
    }
    return discipline;
  }
}
