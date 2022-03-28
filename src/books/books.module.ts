import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { books } from 'src/entities/books';

@Module({
  imports: [TypeOrmModule.forFeature([books])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
