import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { DisciplineEntity } from 'src/discipline/entities/discipline.entity';

@Entity({ name: 'absences' })
export class AbsencesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'number_of_absences' })
  numberOfAbsences: number;

  @Column({ name: 'discipline_id' })
  disciplineId: number;

  @Column({ name: 'reason' })
  reason: string;

  @ManyToMany(() => UserEntity, (user) => user.id)
  user?: UserEntity;

  @ManyToMany(() => DisciplineEntity, (discipline) => discipline.id)
  discipline?: DisciplineEntity;

  @Column({ name: 'date' })
  date: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
