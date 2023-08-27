import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('banners')
export class Banner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url_image: string;

  @Column()
  link: string;

  @Column()
  status: string;
}
