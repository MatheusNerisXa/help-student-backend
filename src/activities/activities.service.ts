import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityDto } from './dtos/activity.dto';
import { ActivityEntity } from './entities/activities.entity';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(ActivityEntity)
    private readonly activitiesRepository: Repository<ActivityEntity>,
  ) {}

  async createActivity(activityDto: ActivityDto): Promise<ActivityEntity> {
    const newActivity = this.activitiesRepository.create(activityDto);
    return await this.activitiesRepository.save(newActivity);
  }

  async findAllActivities(): Promise<ActivityEntity[]> {
    return await this.activitiesRepository.find();
  }

  async findActivityById(activityId: number): Promise<ActivityEntity> {
    const activity = await this.activitiesRepository.findOne({
      where: { id: activityId },
    });
    if (!activity) {
      throw new NotFoundException(`Activity with ID ${activityId} not found`);
    }
    return activity;
  }

  async findActivitiesByDisciplineId(
    disciplineId: number,
  ): Promise<ActivityEntity[]> {
    const activities = await this.activitiesRepository.find({
      where: { discipline: { id: disciplineId } },
    });

    if (!activities) {
      throw new NotFoundException(
        `Activities for discipline with ID ${disciplineId} not found`,
      );
    }

    return activities;
  }

  async findPendingActivitiesByUserId(
    userId: number,
  ): Promise<ActivityEntity[]> {
    const pendingActivities = await this.activitiesRepository.find({
      where: { user: { id: userId }, isCompleted: false },
    });

    return pendingActivities;
  }

  async findActivitiesByUserId(userId: number): Promise<ActivityEntity[]> {
    const activities = await this.activitiesRepository.find({
      where: { user: { id: userId } },
    });

    if (!activities) {
      throw new NotFoundException(
        `Activities for user with ID ${userId} not found`,
      );
    }

    return activities;
  }

  async updateActivity(
    activityId: number,
    activityDto: ActivityDto,
  ): Promise<ActivityEntity> {
    const existingActivity = await this.findActivityById(activityId);

    if (activityDto.taskName !== undefined) {
      existingActivity.taskName = activityDto.taskName;
    }

    if (activityDto.description !== undefined) {
      existingActivity.description = activityDto.description;
    }

    if (activityDto.dueDate !== undefined) {
      existingActivity.dueDate = activityDto.dueDate;
    }

    if (activityDto.isCompleted !== undefined) {
      existingActivity.isCompleted = activityDto.isCompleted;
    }

    return await this.activitiesRepository.save(existingActivity);
  }

  async deleteActivity(activityId: number): Promise<void> {
    const activity = await this.findActivityById(activityId);
    await this.activitiesRepository.remove(activity);
  }
}
