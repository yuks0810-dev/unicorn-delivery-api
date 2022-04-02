import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class shelves {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  name: string;

  @Column()
  memo: string;

  @Column('datetime', { default: null })
  created_at: Date;

  @Column('datetime', { default: null })
  updated_at: Date;

  @Column('datetime', { default: null })
  deleted_at: Date;
}
