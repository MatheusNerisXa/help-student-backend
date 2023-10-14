import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableIas1697242020154 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          CREATE TABLE ias (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            description TEXT,
            url_logo VARCHAR(255) NOT NULL,
            link VARCHAR(255) NOT NULL
          );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE ias;`);
  }
}
