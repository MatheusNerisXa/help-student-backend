import { AbsencesEntity } from '../entities/absences.entity';

export class ReturnAbsences {
  id: number;
  number_of_absences: number;
  discipline_id: number;
  reason: string;
  created_at: Date;

  constructor(absencesEntity: AbsencesEntity) {
    this.id = absencesEntity.id;
    this.number_of_absences = absencesEntity.numberOfAbsences;
    this.discipline_id = absencesEntity.disciplineId;
    this.reason = absencesEntity.reason;
    this.created_at = absencesEntity.createdAt;
  }
}
