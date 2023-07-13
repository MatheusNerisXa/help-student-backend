import { AbsencesEntity } from '../entities/absences.entity';

export const absencesMock: AbsencesEntity = {
  createdAt: new Date(),
  id: 2,
  disciplineId: 1,
  numberOfAbsences: 12,
  userId: 1,
  updatedAt: new Date(),
};
