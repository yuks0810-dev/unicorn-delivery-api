import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class books {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titie: string;

  @Column('datetime', { default: null })
  created_at: Date;

  @Column('datetime', { default: null })
  updated_at: Date;

  @Column('datetime', { default: null })
  deleted_at: Date;
}
