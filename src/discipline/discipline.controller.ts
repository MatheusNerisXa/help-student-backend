import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { DisciplineService } from './discipline.service';
import { CreateDisciplineDto } from './dtos/create-discipline.dto';
import { ReturnDisciplines } from './dtos/return-discipline.dto';
import { DisciplineEntity } from './entities/discipline.entity';
import { UpdateResult } from 'typeorm';

@Controller('discipline')
export class DisciplineController {
  constructor(private readonly disciplineService: DisciplineService) {}

  @Get(':id')
  async findDisciplineById(
    @Param('id') id: number,
  ): Promise<ReturnDisciplines> {
    const discipline: DisciplineEntity =
      await this.disciplineService.findDisciplineById(id);
    if (!discipline) {
      throw new NotFoundException(`No discipline found with ID: ${id}`);
    }
    return new ReturnDisciplines(discipline);
  }

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

  @Put(':id/update-status')
  async updateDisciplineStatusToFive(
    @Param('id') id: number,
  ): Promise<UpdateResult> {
    return this.disciplineService.updateDisciplineStatusToFive(id);
  }
}
