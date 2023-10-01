import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableActivities1696158177294 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE activities (
        id SERIAL PRIMARY KEY NOT NULL,
        taskName VARCHAR(255),
        description TEXT,
        dueDate DATE,
        isCompleted BOOLEAN DEFAULT false,
        discipline_id INT,
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP DEFAULT now(),
        FOREIGN KEY (discipline_id) REFERENCES public.discipline(id)
        );
  `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    DROP TABLE activities;
    `);
  }
}
