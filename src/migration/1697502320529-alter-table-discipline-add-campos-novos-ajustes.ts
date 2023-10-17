import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableDisciplineAddCamposNovosAjustes1697502320529
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          ALTER TABLE discipline
          ADD COLUMN teacher VARCHAR(255),
          ADD COLUMN gradeWeight1 FLOAT,
          ADD COLUMN gradeWeight2 FLOAT,
          ADD COLUMN assignmentsWeight FLOAT;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          ALTER TABLE discipline
          DROP COLUMN teacher,
          DROP COLUMN gradeWeight1,
          DROP COLUMN gradeWeight2,
          DROP COLUMN assignmentsWeight;
        `);
  }
}
