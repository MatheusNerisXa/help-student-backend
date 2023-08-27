import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableBannersAddStatus1693149254179
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "banners" ADD "status" VARCHAR NOT NULL DEFAULT \'1\'',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "banners" DROP COLUMN "status"');
  }
}
