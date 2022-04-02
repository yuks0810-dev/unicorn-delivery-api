import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/entities/books';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
