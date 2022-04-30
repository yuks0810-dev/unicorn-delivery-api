import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Unicorn } from 'src/entities/unicorns';
import { CreateUnicornDto } from './dto/create-unicorn.dto';
import { UpdateUnicornDto } from './dto/update-unicorn.dto';

@Injectable()
export class UnicornsService {
  constructor(
    @InjectRepository(Unicorn)
    private readonly unicornRepository: Repository<Unicorn>,
  ) {}

  create(createUnicornDto: CreateUnicornDto) {
    return 'This action adds a new unicorn';
  }

  async findAll() {
    return await this.unicornRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} unicorn`;
  }

  update(id: number, updateUnicornDto: UpdateUnicornDto) {
    return `This action updates a #${id} unicorn`;
  }

  remove(id: number) {
    return `This action removes a #${id} unicorn`;
  }
}
