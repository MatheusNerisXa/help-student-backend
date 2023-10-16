import { DisciplineEntity } from '../entities/discipline.entity';

export const disciplineMock: DisciplineEntity = {
  id: 1,
  name: 'Programação I',
  disciplineStatusId: 1,
  userId: 1,
  dateStart: new Date(2023, 0, 1),
  dateEnd: new Date(2023, 0, 30),
  room: 'Sala 101',
  minGrade: 5.0,
  maxAbsences: 3.0,
  hour: '10:00 AM',
  monday: true,
  tuesday: false,
  wednesday: true,
  thursday: false,
  friday: true,
  saturday: false,
  sunday: false,
  createdAt: new Date(),
  updatedAt: new Date(),
};
