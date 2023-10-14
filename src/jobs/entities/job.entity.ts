import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('jobs')
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  wage: string;

  @Column()
  number_of_vacancies: number;

  @Column()
  location: string;

  @Column()
  link: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
