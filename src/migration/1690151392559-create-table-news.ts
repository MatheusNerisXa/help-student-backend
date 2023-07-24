import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableNews1690151392559 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "news" (
        "id" SERIAL PRIMARY KEY,
        "title" VARCHAR NOT NULL,
        "description" TEXT NOT NULL,
        "imageUrl" VARCHAR NOT NULL,
        "postedAt" TIMESTAMP NOT NULL DEFAULT now()
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "news"');
  }
}
