import { Controller, Get, Post, Body } from '@nestjs/common';
import { VideoLessonsService } from './video-lessons.service';
import { VideoLesson } from './entities/video-lesson.entity';

@Controller('video-lessons')
export class VideoLessonsController {
  constructor(private readonly videoLessonsService: VideoLessonsService) {}

  @Post()
  async create(@Body() videoLesson: VideoLesson): Promise<VideoLesson> {
    return this.videoLessonsService.create(videoLesson);
  }

  @Get()
  async findAll(): Promise<VideoLesson[]> {
    return this.videoLessonsService.findAll();
  }
}
