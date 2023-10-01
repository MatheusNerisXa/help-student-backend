import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableActivities1696167946914 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE activities
      ADD COLUMN user_id INT;
    `);

    await queryRunner.query(`
      ALTER TABLE activities
      ADD CONSTRAINT FK_user_id
      FOREIGN KEY (user_id)
      REFERENCES public.user(id);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE activities
      DROP CONSTRAINT FK_user_id;
    `);

    await queryRunner.query(`
      ALTER TABLE activities
      DROP COLUMN user_id;
    `);
  }
}
