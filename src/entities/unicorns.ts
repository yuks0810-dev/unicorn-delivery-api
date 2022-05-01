import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('unicorns')
export class Unicorn {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: number;

  @Column('datetime', { default: null })
  created_at: Date;

  @Column('datetime', { default: null })
  updated_at: Date;

  @Column('datetime', { default: null })
  deleted_at: Date;
}
