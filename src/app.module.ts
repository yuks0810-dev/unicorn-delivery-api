import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnicornsModule } from './unicorns/unicorns.module';
@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, BooksModule, UnicornsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
