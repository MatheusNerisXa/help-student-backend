import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableExams1692544364939 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          ALTER TABLE exams
          ADD COLUMN image VARCHAR(255),
          ADD COLUMN link_enrollment VARCHAR(255);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          ALTER TABLE exams
          DROP COLUMN image,
          DROP COLUMN link_enrollment;
        `);
  }
}
