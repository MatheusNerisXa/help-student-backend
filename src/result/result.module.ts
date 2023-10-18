import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultEntity } from './entities/result.entity';
import { ResultService } from './result.service';
import { ResultController } from './result.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ResultEntity])],
  providers: [ResultService],
  controllers: [ResultController],
})
export class ResultModule {}
