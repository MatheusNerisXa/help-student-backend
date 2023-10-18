import { DisciplineEntity } from 'src/discipline/entities/discipline.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'result' })
export class ResultEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'grade', type: 'float' })
  grade: number;

  @Column({ name: 'work_notes' })
  workNotes: string;

  @Column({ name: 'discipline_id' })
  disciplineId: number;

  @ManyToOne(() => DisciplineEntity)
  @JoinColumn({ name: 'discipline_id' })
  discipline: DisciplineEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
