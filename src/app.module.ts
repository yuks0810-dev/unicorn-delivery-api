import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { BooksModule } from './books/books.module';
import { BooksService } from './books/books.service';
import { BooksController } from './books/books.controller';
@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, BooksModule],
  controllers: [UsersController, BooksController],
  providers: [UsersService, BooksService],
})
export class AppModule {}
