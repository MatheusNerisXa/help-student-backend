import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableResult1697585970001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          CREATE TABLE result (
              id SERIAL PRIMARY KEY NOT NULL,
              grade1 INT,
              grade2 INT,
              work_notes TEXT,
              discipline_id INT,
              created_at TIMESTAMP DEFAULT now(),
              updated_at TIMESTAMP DEFAULT now(),
              FOREIGN KEY (discipline_id) REFERENCES discipline(id)
          );
       `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          DROP TABLE result;
       `);
  }
}
