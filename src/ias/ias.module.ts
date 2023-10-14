// ia.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IaController } from './ias.controller';
import { IaService } from './ias.service';
import { Ia } from './entities/ias.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ia])],
  controllers: [IaController],
  providers: [IaService],
})
export class IaModule {}
