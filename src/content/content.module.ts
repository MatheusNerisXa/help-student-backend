import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentEntity } from './entities/content.entity';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContentEntity])],
  providers: [ContentService],
  controllers: [ContentController],
})
export class ContentModule {}
