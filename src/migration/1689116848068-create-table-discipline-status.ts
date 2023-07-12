import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableDisciplineStatus1689116848068
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE discipline_status (
            id INT PRIMARY KEY,
            name VARCHAR(20)
          );
          
          INSERT INTO discipline_status (id, name) VALUES
          (1, 'Aprovado'),
          (2, 'Reprovado'),
          (3, 'Cursando'),
          (4, 'Sub');          
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
         DELETE FROM public.discipline_status;
    `);
  }
}
