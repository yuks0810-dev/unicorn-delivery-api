import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Book } from '../entities/books';
import { BooksService } from './books.service';

describe('BooksService', () => {
  let service: BooksService;
  const mockBooks = [
    {
      id: 1,
      title: 'test title',
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
        {
          provide: getRepositoryToken(Book),
          useValue: {
            findAll: jest.fn().mockResolvedValue([mockBooks]),
          },
        },
      ],
    }).compile();

    service = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
