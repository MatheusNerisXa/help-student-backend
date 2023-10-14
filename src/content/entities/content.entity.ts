import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'content' })
export class ContentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'url_content' })
  urlContent: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
