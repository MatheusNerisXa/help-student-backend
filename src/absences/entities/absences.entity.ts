import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
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

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'discipline_id' })
  disciplineId: number;

  @ManyToMany(() => UserEntity, (user) => user.id)
  user?: UserEntity;

  @ManyToMany(() => DisciplineEntity, (discipline) => discipline.id)
  discipline?: DisciplineEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
