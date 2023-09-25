export class AbsencesDto {
  id: number;
  number_of_absences: number;
  discipline_id: number;
  reason: string;
  created_at: Date;
  updated_at: Date;

  constructor(data: Partial<AbsencesDto>) {
    Object.assign(this, data);
  }
}
