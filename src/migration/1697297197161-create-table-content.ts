import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableContent1697297197161 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
              CREATE TABLE content (
                id SERIAL PRIMARY KEY NOT NULL,
                matter TEXT NOT NULL,
                url_content VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT current_timestamp
              );
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
              DROP TABLE content;
            `);
  }
}
