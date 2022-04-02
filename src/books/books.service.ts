import { Body, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../entities/books';
import { UpdateBookDto } from './dto/update-book.dto';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  @Post()
  async create(@Body() CreateBookDto: CreateBookDto) {
    const result = this.bookRepository.save(CreateBookDto);
    return result;
  }

  async findAll() {
    return await this.bookRepository.find();
  }

  async findOne(id: number) {
    return await this.bookRepository.findOne(id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    const updateResult = this.bookRepository.update(id, updateBookDto);
    return updateResult;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
