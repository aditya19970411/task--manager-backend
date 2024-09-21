import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { IsString } from "class-validator";

@Entity("tasks")
export class TasksEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column({ type: "text", nullable: false })
  description: string;

  @CreateDateColumn({ type: "timestamptz", name: "created_at" })
  createdAt: Date;
}
