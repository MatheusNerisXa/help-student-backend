import { DisciplineEntity } from '../entities/discipline.entity';

export const disciplineMock: DisciplineEntity = {
  id: 1,
  name: 'Programação I',
  disciplineStatusId: 1,
  userId: 1,
  dateStart: new Date(2023, 0, 1),
  dateEnd: new Date(2023, 0, 30),
  createdAt: new Date(),
  updatedAt: new Date(),
};
