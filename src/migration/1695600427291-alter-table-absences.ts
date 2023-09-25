import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableAbsences1695600427291 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE absences
      ADD COLUMN reason VARCHAR(255)
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE absences
      DROP COLUMN reason
    `);
  }
}
