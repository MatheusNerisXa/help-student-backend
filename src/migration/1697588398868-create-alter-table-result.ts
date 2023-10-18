import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAlterTableResult1697588398868 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          ALTER TABLE result
          ADD COLUMN grade float;
        `);

    await queryRunner.query(`
          ALTER TABLE result
          DROP COLUMN grade1,
          DROP COLUMN grade2;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          ALTER TABLE result
          ADD COLUMN grade1 float;
        `);

    await queryRunner.query(`
          ALTER TABLE result
          ADD COLUMN grade2 float;
        `);

    await queryRunner.query(`
          ALTER TABLE result
          DROP COLUMN grade;
        `);
  }
}
