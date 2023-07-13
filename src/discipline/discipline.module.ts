import { Module } from '@nestjs/common';
import { DisciplineService } from './discipline.service';
import { DisciplineController } from './discipline.controller';
import { DisciplineEntity } from './entities/discipline.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DisciplineEntity])],
  providers: [DisciplineService],
  controllers: [DisciplineController],
})
export class DisciplineModule {}
