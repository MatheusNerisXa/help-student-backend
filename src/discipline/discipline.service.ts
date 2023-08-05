import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DisciplineEntity } from './entities/discipline.entity';
import { CreateDisciplineDto } from './dtos/create-discipline.dto';

@Injectable()
export class DisciplineService {
  constructor(
    @InjectRepository(DisciplineEntity)
    private disciplineRepository: Repository<DisciplineEntity>,
  ) {}

  async findAllDisciplines(): Promise<DisciplineEntity[]> {
    const disciplines = await this.disciplineRepository.find();

    if (!disciplines || disciplines.length === 0) {
      throw new NotFoundException('No disciplines found');
    }

    return disciplines;
  }

  async createDiscipline(
    createDisciplineDto: CreateDisciplineDto,
  ): Promise<DisciplineEntity> {
    const newDiscipline = this.disciplineRepository.create(createDisciplineDto);
    return this.disciplineRepository.save(newDiscipline);
  }

  async findDisciplinesByUserId(userId: number): Promise<DisciplineEntity[]> {
    const disciplines = await this.disciplineRepository.find({
      where: { userId },
    });

    if (!disciplines || disciplines.length === 0) {
      throw new NotFoundException(
        `No disciplines found for user with ID: ${userId}`,
      );
    }

    return disciplines;
  }
}
