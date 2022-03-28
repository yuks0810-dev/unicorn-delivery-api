import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { users } from '../entities/users';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  const mockUsers = [
    {
      id: 1,
      firstName: 'nakata',
      lastName: 'yuki',
      email: 'nakata.yuki@example.com',
      password: 'password',
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(users),
          useValue: {
            findAll: jest.fn().mockResolvedValue([mockUsers]),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
