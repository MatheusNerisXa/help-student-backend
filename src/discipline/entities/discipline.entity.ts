import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { DisciplineStatusEntity } from 'src/discipline-status/entities/disciplineStatus.entity';
import { AbsencesEntity } from 'src/absences/entities/absences.entity';
import { ActivityEntity } from 'src/activities/entities/activities.entity';

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

  @ManyToOne(() => DisciplineStatusEntity)
  @JoinColumn({ name: 'status_discipline_id', referencedColumnName: 'id' })
  disciplineStatus?: DisciplineStatusEntity;

  @OneToMany(() => AbsencesEntity, (absences) => absences.discipline)
  absences?: AbsencesEntity[];

  @OneToMany(() => ActivityEntity, (activity) => activity.discipline)
  activities?: ActivityEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'room', nullable: true })
  room: string;

  @Column({ name: 'min_grade', type: 'float', nullable: true })
  minGrade: number;

  @Column({ name: 'max_absences', type: 'float', nullable: true })
  maxAbsences: number;

  @Column({ name: 'hour', nullable: true })
  hour: string;

  @Column({ name: 'monday', default: false })
  monday: boolean;

  @Column({ name: 'tuesday', default: false })
  tuesday: boolean;

  @Column({ name: 'wednesday', default: false })
  wednesday: boolean;

  @Column({ name: 'thursday', default: false })
  thursday: boolean;

  @Column({ name: 'friday', default: false })
  friday: boolean;

  @Column({ name: 'saturday', default: false })
  saturday: boolean;

  @Column({ name: 'sunday', default: false })
  sunday: boolean;
}
