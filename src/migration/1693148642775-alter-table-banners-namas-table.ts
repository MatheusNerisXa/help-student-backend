import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableBannersNamasTable1693148642775
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "banners" RENAME COLUMN "nome" TO "name"',
    );
    await queryRunner.query(
      'ALTER TABLE "banners" RENAME COLUMN "url" TO "url_image"',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "banners" RENAME COLUMN "name" TO "nome"',
    );
    await queryRunner.query(
      'ALTER TABLE "banners" RENAME COLUMN "url_image" TO "url"',
    );
  }
}
