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

  async deleteAbsence(absenceId: number): Promise<void> {
    const result = await this.absencesRepository.delete(absenceId);

    if (result.affected === 0) {
      throw new NotFoundException(`Absence with ID ${absenceId} not found`);
    }
  }

  async updateAbsence(
    absenceId: number,
    updateAbsenceDto: Partial<AbsencesDto>,
  ): Promise<AbsencesEntity> {
    const absence = await this.absencesRepository.findOne({
      where: { id: absenceId },
    });

    if (!absence) {
      throw new NotFoundException(`Absence with ID ${absenceId} not found`);
    }

    if (updateAbsenceDto.reason !== undefined) {
      absence.reason = updateAbsenceDto.reason;
    }

    if (updateAbsenceDto.number_of_absences !== undefined) {
      absence.numberOfAbsences = updateAbsenceDto.number_of_absences;
    }

    if (updateAbsenceDto.created_at !== undefined) {
      absence.createdAt = updateAbsenceDto.created_at;
    }

    return await this.absencesRepository.save(absence);
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
