import { Body, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { books } from 'src/entities/books';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(books)
    private readonly bookRepository: Repository<books>,
  ) {}

  @Post()
  async create(@Body() Books: Array<books>) {
    console.log(Books);
    return this.bookRepository.create();
  }

  async findAll() {
    return await this.bookRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #id:${id} → ${updateBookDto} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
