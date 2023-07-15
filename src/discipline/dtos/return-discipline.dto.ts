import { DisciplineEntity } from '../entities/discipline.entity';
export class ReturnDisciplines {
  id: number;
  name: string;
  status_discipline: number;
  userId: number;
  dateStart: Date;
  dateEnd: Date;

  constructor(disciplineEntity: DisciplineEntity) {
    this.id = disciplineEntity.id;
    this.name = disciplineEntity.name;
    this.status_discipline = disciplineEntity.disciplineStatusId;
    this.userId = disciplineEntity.userId;
    this.dateStart = disciplineEntity.dateStart;
    this.dateEnd = disciplineEntity.dateEnd;
  }
}
