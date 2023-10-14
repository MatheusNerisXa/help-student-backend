import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ias')
export class Ia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  url_logo: string;

  @Column()
  link: string;
}
