import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlteraddlinkTableJobs1697285893398 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE jobs ADD COLUMN link VARCHAR(255);`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE jobs DROP COLUMN link;`);
  }
}
