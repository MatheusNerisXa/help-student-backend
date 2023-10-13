import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VideoLesson } from './entities/video-lesson.entity';

@Injectable()
export class VideoLessonsService {
  constructor(
    @InjectRepository(VideoLesson)
    private readonly videoLessonRepository: Repository<VideoLesson>,
  ) {}

  async create(videoLesson: VideoLesson): Promise<VideoLesson> {
    return this.videoLessonRepository.save(videoLesson);
  }

  async findAll(): Promise<VideoLesson[]> {
    return this.videoLessonRepository.find();
  }
}
