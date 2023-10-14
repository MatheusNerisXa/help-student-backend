import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ia } from './entities/ias.entity';

@Injectable()
export class IaService {
  constructor(
    @InjectRepository(Ia)
    private readonly iaRepository: Repository<Ia>,
  ) {}

  async findAllIas(): Promise<Ia[]> {
    return this.iaRepository.find();
  }

  async createIa(ia: Ia): Promise<Ia> {
    return this.iaRepository.save(ia);
  }
}
