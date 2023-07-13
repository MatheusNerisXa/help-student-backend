import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { DisciplineEntity } from 'src/discipline/entities/discipline.entity';

@Entity({ name: 'discipline_status' })
export class DisciplineStatusEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @OneToMany(
    () => DisciplineEntity,
    (discipline) => discipline.disciplineStatus,
  )
  disciplines: DisciplineEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
