import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class rentalStatuses {
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

  @Column()
  returnDate: Date;

  @Column('datetime', { default: null })
  created_at: Date;

  @Column('datetime', { default: null })
  updated_at: Date;

  @Column('datetime', { default: null })
  deleted_at: Date;
}
