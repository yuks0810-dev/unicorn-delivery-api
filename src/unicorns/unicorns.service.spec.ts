import { Test, TestingModule } from '@nestjs/testing';
import { UnicornsService } from './unicorns.service';

describe('UnicornsService', () => {
  let service: UnicornsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnicornsService],
    }).compile();

    service = module.get<UnicornsService>(UnicornsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
