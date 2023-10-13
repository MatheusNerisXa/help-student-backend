import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  course_name: string;

  @Column()
  course_link: string;

  @Column({ nullable: true })
  url_image: string;

  @Column({ nullable: true, name: 'institution' })
  institution: string;

  @Column({ nullable: true })
  description: string;
}
