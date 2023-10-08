import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'file_discipline' })
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'discipline_id' })
  disciplineId: number;

  @Column({ name: 'file_name' })
  fileName: string;

  @Column({ name: 'file_url' })
  fileUrl: string;

  @Column({ name: 'file_description', nullable: true }) // Adicione o campo file_description aqui
  fileDescription: string | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
