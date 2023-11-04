import { AbsencesEntity } from '../entities/absences.entity';

export const absencesMock: AbsencesEntity = {
  createdAt: new Date(),
  id: 2,
  reason: 'Consulta',
  disciplineId: 1,
  numberOfAbsences: 12,
  updatedAt: new Date(),
  date: new Date(),
};
