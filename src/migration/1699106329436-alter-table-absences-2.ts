import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableAbsences21699106329436 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          ALTER TABLE absences
          ADD COLUMN date DATE;
        `);

    await queryRunner.query(`
          ALTER TABLE absences
          DROP COLUMN user_id;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          ALTER TABLE absences
          ADD COLUMN user_id INT;
        `);

    await queryRunner.query(`
          ALTER TABLE absences
          DROP COLUMN date;
        `);
  }
}
