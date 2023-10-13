import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoLessonsController } from './video-lessons.controller';
import { VideoLessonsService } from './video-lessons.service';
import { VideoLesson } from './entities/video-lesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VideoLesson])],
  controllers: [VideoLessonsController],
  providers: [VideoLessonsService],
})
export class VideoLessonsModule {}
