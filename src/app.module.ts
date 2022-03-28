import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
