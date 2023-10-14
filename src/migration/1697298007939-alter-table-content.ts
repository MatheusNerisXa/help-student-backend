import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableContent1697298007939 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          ALTER TABLE content
          RENAME COLUMN matter TO title;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE content
      RENAME COLUMN title TO matter;
    `);
  }
}
