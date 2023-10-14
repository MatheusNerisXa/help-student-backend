import { Controller, Get, Post, Body } from '@nestjs/common';
import { IaService } from './ias.service';
import { Ia } from './entities/ias.entity';

@Controller('ias')
export class IaController {
  constructor(private readonly iaService: IaService) {}

  @Get()
  async findAll(): Promise<Ia[]> {
    return this.iaService.findAllIas();
  }

  @Post()
  async create(@Body() ia: Ia): Promise<Ia> {
    return this.iaService.createIa(ia);
  }
}
