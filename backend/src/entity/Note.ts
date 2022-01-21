import {
  PrimaryColumn,
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { UserNote } from "./UserNote";

@Entity()
export class Note extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column("varchar", { length: 255 })
  title: string;

  @Column("text")
  body: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @OneToMany(() => UserNote, (un) => un.note)
  users: UserNote[];
}
