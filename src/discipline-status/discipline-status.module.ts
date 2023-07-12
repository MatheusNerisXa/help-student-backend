import { Module } from '@nestjs/common';
import { DisciplineStatusService } from './discipline-status.service';
import { DisciplineStatusController } from './discipline-status.controller';

@Module({
  providers: [DisciplineStatusService],
  exports: [DisciplineStatusService],
  controllers: [DisciplineStatusController],
})
export class DisciplineStatusModule {}
