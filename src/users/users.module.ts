import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from 'src/entities/users';

@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([users])],
  providers: [UsersService],
})
export class UsersModule {}
