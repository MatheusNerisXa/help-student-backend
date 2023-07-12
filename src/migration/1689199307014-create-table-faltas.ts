import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableFaltas1689199307014 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
              CREATE TABLE absences (
                  id SERIAL PRIMARY KEY NOT NULL,
                  number_of_absences INT,
                  user_id INT,
                  discipline_id INT,
                  created_at TIMESTAMP DEFAULT now(),
                  updated_at TIMESTAMP DEFAULT now(),
                  FOREIGN KEY (user_id) REFERENCES public.user(id),
                  FOREIGN KEY (discipline_id) REFERENCES public.discipline(id)
              );
           `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
              DROP TABLE absences;
           `);
  }
}
