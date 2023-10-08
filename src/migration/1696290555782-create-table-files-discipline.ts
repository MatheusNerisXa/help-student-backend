import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableFilesDiscipline1696290555782
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE file_discipline (
          id SERIAL PRIMARY KEY NOT NULL,
          discipline_id INT NOT NULL,
          file_name VARCHAR(255) NOT NULL,
          file_url VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT current_timestamp,
          updated_at TIMESTAMP DEFAULT current_timestamp,
          FOREIGN KEY (discipline_id) REFERENCES discipline (id)
        );
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
  DROP TABLE file_discipline;
`);
  }
}
