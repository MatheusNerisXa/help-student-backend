import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbsencesEntity } from './entities/absences.entity';
import { AbsencesDto } from './dtos/create-absence.dto';

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

  async findAbsencesByDisciplineId(
    disciplineId: number,
  ): Promise<AbsencesEntity[]> {
    const absences = await this.absencesRepository.find({
      where: { disciplineId },
    });

    if (!absences || absences.length === 0) {
      throw new NotFoundException(
        `Absences for discipline with ID ${disciplineId} not found`,
      );
    }

    return absences;
  }

  async createAbsence(createAbsenceDto: AbsencesDto): Promise<AbsencesEntity> {
    const newAbsence = this.absencesRepository.create({
      ...createAbsenceDto,
      reason: 'Razão da falta',
    });

    return await this.absencesRepository.save(newAbsence);
  }

  async getTotalAbsencesByDiscipline(disciplineId: number): Promise<number> {
    const absences = await this.absencesRepository.find({
      where: { disciplineId },
    });

    if (!absences) {
      return 0;
    }

    const totalAbsences = absences.reduce(
      (total, absence) => total + absence.numberOfAbsences,
      0,
    );

    return totalAbsences;
  }
}
