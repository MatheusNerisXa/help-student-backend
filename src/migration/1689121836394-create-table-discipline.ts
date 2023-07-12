import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableDiscipline1689121836394 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          CREATE TABLE discipline (
              id SERIAL PRIMARY KEY NOT NULL,
              name VARCHAR(255) NOT NULL,
              user_id INT,
              status_discipline_id INT,
              date_start DATE,
              date_end DATE,
              created_at TIMESTAMP DEFAULT now(),
              updated_at TIMESTAMP DEFAULT now(),
              FOREIGN KEY (user_id) REFERENCES public.user(id),
              FOREIGN KEY (status_discipline_id) REFERENCES public.discipline_status(id)
          );
       `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          DROP TABLE discipline;
       `);
  }
}
