import { AbsencesEntity } from 'src/absences/entities/absences.entity';
import { ActivityEntity } from 'src/activities/entities/activities.entity';
import { AddressEntity } from 'src/address/entities/address.entity';
import { DisciplineEntity } from 'src/discipline/entities/discipline.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;
  @Column({ name: 'email', nullable: false })
  email: string;
  @Column({ name: 'phone' })
  phone: string;
  @Column({ name: 'cpf', nullable: false })
  cpf: string;
  @Column({ name: 'password', nullable: false })
  password: string;
  @Column({ name: 'type_user', nullable: false })
  typeUser: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => AddressEntity, (address) => address.user)
  addresses?: AddressEntity[];

  @OneToMany(() => DisciplineEntity, (discipline) => discipline.user)
  disciplines: DisciplineEntity[];

  @OneToMany(() => AbsencesEntity, (absences) => absences.user)
  absences: AbsencesEntity[];

  @OneToMany(() => ActivityEntity, (activity) => activity.user)
  activities: ActivityEntity[];

  @Column({ name: 'photo_image', nullable: true })
  photoImage: string;
}
