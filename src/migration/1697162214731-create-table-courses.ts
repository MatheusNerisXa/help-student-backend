import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCourses1697162214731 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          CREATE TABLE courses (
            id SERIAL PRIMARY KEY,
            course_name VARCHAR(255) NOT NULL,
            course_link VARCHAR(255) NOT NULL,
            institution VARCHAR(255),
            description TEXT,
            url_image VARCHAR(255)
          );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE courses;`);
  }
}
