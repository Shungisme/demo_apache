import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity("words")
export class Word {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  english: string;

  @Column({ length: 255 })
  vietnamese: string;

  @CreateDateColumn()
  createdAt: Date;
}
