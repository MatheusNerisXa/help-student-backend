import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivityDto } from './dtos/activity.dto';
import { ActivityEntity } from './entities/activities.entity';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Post()
  async createActivity(
    @Body() activityDto: ActivityDto,
  ): Promise<ActivityEntity> {
    return this.activitiesService.createActivity(activityDto);
  }

  @Get()
  async findAllActivities(): Promise<ActivityEntity[]> {
    return this.activitiesService.findAllActivities();
  }

  @Get(':id')
  async findActivityById(
    @Param('id') activityId: number,
  ): Promise<ActivityEntity> {
    return this.activitiesService.findActivityById(activityId);
  }

  @Get('discipline/:disciplineId')
  async findActivitiesByDisciplineId(
    @Param('disciplineId') disciplineId: number,
  ): Promise<ActivityEntity[]> {
    return this.activitiesService.findActivitiesByDisciplineId(disciplineId);
  }
  @Get('user/:userId/pending')
  async findPendingActivitiesByUserId(
    @Param('userId') userId: number,
  ): Promise<ActivityEntity[]> {
    return this.activitiesService.findPendingActivitiesByUserId(userId);
  }

  @Get('user/:userId')
  async findActivitiesByUserId(
    @Param('userId') userId: number,
  ): Promise<ActivityEntity[]> {
    return this.activitiesService.findActivitiesByUserId(userId);
  }

  @Put(':id')
  async updateActivity(
    @Param('id') activityId: number,
    @Body() activityDto: ActivityDto,
  ): Promise<ActivityEntity> {
    return this.activitiesService.updateActivity(activityId, activityDto);
  }

  @Delete(':id')
  async deleteActivity(@Param('id') activityId: number): Promise<void> {
    return this.activitiesService.deleteActivity(activityId);
  }
}
