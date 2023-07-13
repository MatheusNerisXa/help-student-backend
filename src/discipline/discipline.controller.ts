import { Controller, Get } from '@nestjs/common';
import { DisciplineService } from './discipline.service';
import { ReturnDisciplines } from './dtos/return-discipline.dto';
import { DisciplineEntity } from './entities/discipline.entity';

@Controller('discipline')
export class DisciplineController {
  constructor(private readonly disciplineService: DisciplineService) {}
  @Get()
  async findAllAbsences(): Promise<ReturnDisciplines[]> {
    const disciplines: DisciplineEntity[] =
      await this.disciplineService.findAllAbsences();
    return disciplines.map((discipline) => new ReturnDisciplines(discipline));
  }
}
