import { Module } from '@nestjs/common';
import { AbsencesService } from './absences.service';
import { AbsencesController } from './absences.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbsencesEntity } from './entities/absences.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AbsencesEntity])],
  providers: [AbsencesService],
  controllers: [AbsencesController],
})
export class AbsencesModule {}
