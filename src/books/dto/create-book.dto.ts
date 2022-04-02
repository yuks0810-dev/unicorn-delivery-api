import { IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  id: number;

  @IsNotEmpty()
  title: string;

  created_at: Date;

  updated_at: Date;

  deleted_at: Date;
}
