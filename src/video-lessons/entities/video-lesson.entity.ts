import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('video_lessons')
export class VideoLesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  video_id: string;
}
