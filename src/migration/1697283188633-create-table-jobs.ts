import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableJobs1697283188633 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          CREATE TABLE jobs (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            wage VARCHAR(255) NOT NULL,
            number_of_vacancies INT NOT NULL,
            location VARCHAR(255) NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT now()
          );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE jobs;`);
  }
}
