import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableDisciplineAjustes1697446674237
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          ALTER TABLE discipline
          ADD COLUMN room VARCHAR(255),
          ADD COLUMN min_grade FLOAT,
          ADD COLUMN max_absences FLOAT,
          ADD COLUMN hour VARCHAR(255),
          ADD COLUMN monday BOOLEAN,
          ADD COLUMN tuesday BOOLEAN,
          ADD COLUMN wednesday BOOLEAN,
          ADD COLUMN thursday BOOLEAN,
          ADD COLUMN friday BOOLEAN,
          ADD COLUMN saturday BOOLEAN,
          ADD COLUMN sunday BOOLEAN;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          ALTER TABLE discipline
          DROP COLUMN room,
          DROP COLUMN min_grade,
          DROP COLUMN max_absences,
          DROP COLUMN hour,
          DROP COLUMN monday,
          DROP COLUMN tuesday,
          DROP COLUMN wednesday,
          DROP COLUMN thursday,
          DROP COLUMN friday,
          DROP COLUMN saturday,
          DROP COLUMN sunday;
        `);
  }
}
