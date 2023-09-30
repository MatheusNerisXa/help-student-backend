import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
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

  async findDisciplineById(id: number): Promise<DisciplineEntity | undefined> {
    const discipline = await this.disciplineRepository.findOne({
      where: { id },
    });
    return discipline;
  }

  async updateDisciplineStatusToFive(id: number): Promise<UpdateResult> {
    return this.disciplineRepository.update({ id }, { disciplineStatusId: 5 });
  }
}
