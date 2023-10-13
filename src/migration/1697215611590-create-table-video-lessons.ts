import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableVideoLessons1697215611590
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          CREATE TABLE video_lessons (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            video_id VARCHAR(255) NOT NULL
          );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE video_lessons;`);
  }
}
