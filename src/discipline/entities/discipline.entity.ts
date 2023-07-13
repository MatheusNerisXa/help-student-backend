import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { DisciplineStatusEntity } from 'src/discipline-status/entities/disciplineStatus.entity';
import { AbsencesEntity } from 'src/absences/entities/absences.entity';

@Entity({ name: 'discipline' })
export class DisciplineEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', nullable: true })
  name: string;

  @ManyToOne(() => UserEntity, (user) => user.disciplines)
  user: UserEntity;

  @ManyToOne(
    () => DisciplineStatusEntity,
    (disciplineStatus) => disciplineStatus.disciplines,
  )
  disciplineStatus: DisciplineStatusEntity;

  @OneToMany(() => AbsencesEntity, (absences) => absences.discipline)
  absences: AbsencesEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
