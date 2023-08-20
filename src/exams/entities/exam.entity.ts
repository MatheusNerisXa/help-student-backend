import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('exams')
export class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ name: 'registration_start', type: 'date' })
  registrationStart: Date;

  @Column({ name: 'registration_end', type: 'date' })
  registrationEnd: Date;

  @Column({ name: 'exam1_date', type: 'date' })
  exam1Date: Date;

  @Column({ name: 'exam2_date', type: 'date' })
  exam2Date: Date;

  @Column({ name: 'result_date', type: 'date' })
  resultDate: Date;

  @Column({ nullable: true })
  image: string;

  @Column({ name: 'link_enrollment', nullable: true })
  linkEnrollment: string;
}
