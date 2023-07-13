import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinColumn,
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

  @Column({ name: 'status_discipline_id' })
  disciplineStatusId: number;

  @Column({ name: 'date_start' })
  dateStart: Date;

  @Column({ name: 'date_end' })
  dateEnd: Date;

  @Column({ name: 'user_id' })
  userId: number;

  @ManyToMany(() => UserEntity, (user) => user.disciplines)
  user?: UserEntity;

  @ManyToMany(() => DisciplineStatusEntity)
  @JoinColumn({ name: 'status_discipline_id', referencedColumnName: 'id' })
  disciplineStatus?: DisciplineStatusEntity;

  @ManyToMany(() => AbsencesEntity, (absences) => absences.id)
  absencesId?: AbsencesEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
