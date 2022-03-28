import { Injectable } from '@nestjs/common';
import { Repository, InsertResult } from 'typeorm';
import { users } from '../entities/users';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(users)
    private readonly userRepository: Repository<users>,
  ) {}

  async fiindAll(): Promise<users[]> {
    return await this.userRepository.find();
  }
}
