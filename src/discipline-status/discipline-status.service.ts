import { Injectable } from '@nestjs/common';

@Injectable()
export class DisciplineStatusService {
  private readonly disciplineStatus = [
    { id: 1, name: 'Aprovado' },
    { id: 2, name: 'Reprovado' },
    { id: 3, name: 'Cursando' },
    { id: 4, name: 'Sub' },
    { id: 5, name: 'Excluido' },
  ];

  getAll() {
    return this.disciplineStatus;
  }
}
