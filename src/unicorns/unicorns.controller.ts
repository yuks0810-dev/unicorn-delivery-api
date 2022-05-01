import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UnicornsService } from './unicorns.service';
import { CreateUnicornDto } from './dto/create-unicorn.dto';
import { UpdateUnicornDto } from './dto/update-unicorn.dto';
import { InsertResult } from 'typeorm';

@Controller('unicorns')
export class UnicornsController {
  constructor(private readonly unicornsService: UnicornsService) {}

  @Post()
  create(@Body() createUnicornDto: CreateUnicornDto): Promise<InsertResult> {
    return this.unicornsService.create(createUnicornDto);
  }

  @Get()
  findAll() {
    return this.unicornsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unicornsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUnicornDto: UpdateUnicornDto) {
    return this.unicornsService.update(+id, updateUnicornDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unicornsService.remove(+id);
  }
}
