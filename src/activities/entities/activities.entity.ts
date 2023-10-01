import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { DisciplineEntity } from 'src/discipline/entities/discipline.entity';
import { UserEntity } from 'src/user/entities/user.entity';

@Entity('activities')
export class ActivityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'taskname' })
  taskName: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'duedate' })
  dueDate: Date;

  @Column({ name: 'iscompleted', default: false })
  isCompleted: boolean;

  @ManyToOne(() => DisciplineEntity, (discipline) => discipline.activities)
  @JoinColumn({ name: 'discipline_id' })
  discipline: DisciplineEntity;

  @ManyToOne(() => UserEntity, (user) => user.activities)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
