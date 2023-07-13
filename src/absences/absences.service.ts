import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbsencesEntity } from './entities/absences.entity';

@Injectable()
export class AbsencesService {
  constructor(
    @InjectRepository(AbsencesEntity)
    private absencesRepository: Repository<AbsencesEntity>,
  ) {}

  async findAllAbsences(): Promise<AbsencesEntity[]> {
    const absences = await this.absencesRepository.find();

    if (!absences || absences.length === 0) {
      throw new NotFoundException('Absences empty');
    }
    return absences;
  }
}
