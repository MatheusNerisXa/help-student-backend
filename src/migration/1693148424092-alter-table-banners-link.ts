import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableBannersLink1693148424092 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "banners" ALTER COLUMN "link" DROP NOT NULL',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "banners" ALTER COLUMN "link" SET NOT NULL',
    );
  }
}
