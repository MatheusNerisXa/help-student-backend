import { Controller, Get } from '@nestjs/common';
import { DisciplineStatusService } from './discipline-status.service';

@Controller('discipline-status')
export class DisciplineStatusController {
  constructor(
    private readonly disciplineStatusService: DisciplineStatusService,
  ) {}

  @Get()
  getAll() {
    return this.disciplineStatusService.getAll();
  }
}
