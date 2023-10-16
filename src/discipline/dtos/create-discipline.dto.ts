export class CreateDisciplineDto {
  name: string;
  status_discipline: number;
  userId: number;
  dateStart: string;
  dateEnd: string;
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
}
