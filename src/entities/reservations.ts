import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class reservations {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  bookId: number;

  @Column()
  rentFrom: Date;

  @Column()
  rentTo: Date;

  @Column('datetime', { default: null })
  created_at: Date;

  @Column('datetime', { default: null })
  updated_at: Date;

  @Column('datetime', { default: null })
  deleted_at: Date;
}
