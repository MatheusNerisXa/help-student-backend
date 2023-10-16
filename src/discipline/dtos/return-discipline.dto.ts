import { DisciplineEntity } from '../entities/discipline.entity';

export class ReturnDisciplines {
  id: number;
  name: string;
  status_discipline: number;
  userId: number;
  dateStart: Date;
  dateEnd: Date;
  room: string;
  minGrade: number;
  maxAbsences: number;
  hour: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;

  constructor(disciplineEntity: DisciplineEntity) {
    this.id = disciplineEntity.id;
    this.name = disciplineEntity.name;
    this.status_discipline = disciplineEntity.disciplineStatusId;
    this.userId = disciplineEntity.userId;
    this.dateStart = disciplineEntity.dateStart;
    this.dateEnd = disciplineEntity.dateEnd;
    this.room = disciplineEntity.room;
    this.minGrade = disciplineEntity.minGrade;
    this.maxAbsences = disciplineEntity.maxAbsences;
    this.hour = disciplineEntity.hour;
    this.monday = disciplineEntity.monday;
    this.tuesday = disciplineEntity.tuesday;
    this.wednesday = disciplineEntity.wednesday;
    this.thursday = disciplineEntity.thursday;
    this.friday = disciplineEntity.friday;
    this.saturday = disciplineEntity.saturday;
    this.sunday = disciplineEntity.sunday;
  }
}
