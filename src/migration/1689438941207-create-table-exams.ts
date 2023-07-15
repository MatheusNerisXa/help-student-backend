import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateExamsTable1630575276826 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    CREATE TABLE exams (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        registration_start DATE NOT NULL,
        registration_end DATE NOT NULL,
        exam1_date DATE NOT NULL,
        exam2_date DATE NOT NULL,
        result_date DATE NOT NULL
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE exams;`);
  }
}
