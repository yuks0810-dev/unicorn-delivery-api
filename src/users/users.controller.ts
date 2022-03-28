import { Controller, Get } from '@nestjs/common';
import { users } from 'src/entities/users';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): Promise<users[]> {
    return this.usersService.fiindAll();
  }
}
