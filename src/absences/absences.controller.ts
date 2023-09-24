import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get(':disciplineId')
  async findAbsencesByDisciplineId(
    @Param('disciplineId') disciplineId: number,
  ): Promise<ReturnAbsences[]> {
    const absences: AbsencesEntity[] =
      await this.absencesService.findAbsencesByDisciplineId(disciplineId);
    return absences.map((absence) => new ReturnAbsences(absence));
  }
}
