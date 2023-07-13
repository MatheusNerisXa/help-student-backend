import { Controller, Get } from '@nestjs/common';
import { AbsencesService } from './absences.service';
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
}
