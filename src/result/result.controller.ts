import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ResultService } from './result.service';
import { CreateResultDto } from './dtos/create-result.dto';
import { ResultEntity } from './entities/result.entity';

@Controller('results')
export class ResultController {
  constructor(private readonly resultService: ResultService) {}

  @Post()
  async createResult(
    @Body() createResultDto: CreateResultDto,
  ): Promise<ResultEntity> {
    return this.resultService.createResult(createResultDto);
  }

  @Get()
  async findAllResults(): Promise<ResultEntity[]> {
    return this.resultService.findAllResults();
  }

  @Get('discipline/:disciplineId')
  async findResultsByDisciplineId(
    @Param('disciplineId') disciplineId: number,
  ): Promise<ResultEntity[]> {
    return this.resultService.findResultsByDisciplineId(disciplineId);
  }
}
