import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableNews1690153330265 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "news" ALTER COLUMN "postedAt" TYPE date',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "news"');
  }
}
