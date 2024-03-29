import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AbsencesService } from './absences.service';
import { AbsencesDto } from './dtos/create-absence.dto';
import { ReturnAbsences } from './dtos/return-absences.dto';
import { AbsencesEntity } from './entities/absences.entity';

@Controller('absences')
export class AbsencesController {
  constructor(private readonly absencesService: AbsencesService) {}

  @Get()
  async findAllAbsences(): Promise<ReturnAbsences[]> {
    const absences: AbsencesEntity[] =
      await this.absencesService.findAllAbsences();
    return absences.map((absence) => new ReturnAbsences(absence));
  }

  @Post()
  async createAbsence(
    @Body() createAbsenceDto: AbsencesDto,
  ): Promise<AbsencesEntity> {
    return this.absencesService.createAbsence(createAbsenceDto);
  }

  @Get('total/:disciplineId')
  async getTotalAbsencesByDiscipline(
    @Param('disciplineId') disciplineId: number,
  ) {
    const total = await this.absencesService.getTotalAbsencesByDiscipline(
      disciplineId,
    );
    return total;
  }

  @Put(':absenceId')
  async updateAbsence(
    @Param('absenceId') absenceId: number,
    @Body() updateAbsenceDto: Partial<AbsencesDto>,
  ): Promise<AbsencesEntity> {
    return this.absencesService.updateAbsence(absenceId, updateAbsenceDto);
  }

  @Delete(':absenceId')
  async deleteAbsence(@Param('absenceId') absenceId: number): Promise<void> {
    await this.absencesService.deleteAbsence(absenceId);
  }

  @Get(':disciplineId')
  async findAbsencesByDisciplineId(
    @Param('disciplineId') disciplineId: number,
  ): Promise<ReturnAbsences[]> {
    const absences: AbsencesEntity[] =
      await this.absencesService.findAbsencesByDisciplineId(disciplineId);
    return absences.map((absence) => new ReturnAbsences(absence));
  }
}
