import { Controller, Get, Post, Body } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course } from './entities/course.entity';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  async findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  @Post()
  async create(@Body() course: Course): Promise<Course> {
    return this.coursesService.create(course);
  }
}
