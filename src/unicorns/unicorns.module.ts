import { Module } from '@nestjs/common';
import { UnicornsService } from './unicorns.service';
import { UnicornsController } from './unicorns.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unicorn } from 'src/entities/unicorns';

@Module({
  imports: [TypeOrmModule.forFeature([Unicorn])],
  controllers: [UnicornsController],
  providers: [UnicornsService],
})
export class UnicornsModule {}
