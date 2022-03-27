import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class companies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('datetime', { default: null })
  created_at: Date;

  @Column('datetime', { default: null })
  updated_at: Date;

  @Column('datetime', { default: null })
  deleted_at: Date;
}
