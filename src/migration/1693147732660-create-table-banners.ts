import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableBanners1693147732660 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          CREATE TABLE "banners" (
            "id" SERIAL PRIMARY KEY,
            "nome" VARCHAR NOT NULL,
            "url" VARCHAR NOT NULL,
            "link" VARCHAR NOT NULL
          )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "banners"');
  }
}
