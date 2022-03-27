import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTaskDTO {
  @IsNotEmpty()
  @IsNumber()
  id: Number;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
