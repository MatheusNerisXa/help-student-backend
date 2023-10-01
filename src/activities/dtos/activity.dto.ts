export class ActivityDto {
  taskName: string;
  description: string;
  userId: number;
  dueDate: Date;
  isCompleted: boolean;
  disciplineId: number;

  constructor(data: Partial<ActivityDto>) {
    Object.assign(this, data);
  }
}
