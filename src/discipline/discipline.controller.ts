import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DisciplineService } from './discipline.service';
import { CreateDisciplineDto } from './dtos/create-discipline.dto';
import { ReturnDisciplines } from './dtos/return-discipline.dto';
import { DisciplineEntity } from './entities/discipline.entity';

@Controller('discipline')
export class DisciplineController {
  constructor(private readonly disciplineService: DisciplineService) {}

  @Get()
  async findAllAbsences(): Promise<ReturnDisciplines[]> {
    const disciplines: DisciplineEntity[] =
      await this.disciplineService.findAllDisciplines();
    return disciplines.map((discipline) => new ReturnDisciplines(discipline));
  }

  @Post()
  async createDiscipline(
    @Body() createDisciplineDto: CreateDisciplineDto,
  ): Promise<ReturnDisciplines> {
    const newDiscipline: DisciplineEntity =
      await this.disciplineService.createDiscipline(createDisciplineDto);
    return new ReturnDisciplines(newDiscipline);
  }

  @Get('/user/:userId')
  async findDisciplinesByUserId(
    @Param('userId') userId: number,
  ): Promise<ReturnDisciplines[]> {
    const disciplines: DisciplineEntity[] =
      await this.disciplineService.findDisciplinesByUserId(userId);
    return disciplines.map((discipline) => new ReturnDisciplines(discipline));
  }
}
