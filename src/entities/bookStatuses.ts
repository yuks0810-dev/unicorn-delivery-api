import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class bookStatuses {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookId: number;

  @Column()
  status: string;

  @Column('datetime', { default: null })
  created_at: Date;

  @Column('datetime', { default: null })
  updated_at: Date;

  @Column('datetime', { default: null })
  deleted_at: Date;
}
