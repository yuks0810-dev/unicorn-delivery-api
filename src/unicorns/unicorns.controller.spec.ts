import { Test, TestingModule } from '@nestjs/testing';
import { UnicornsController } from './unicorns.controller';
import { UnicornsService } from './unicorns.service';

describe('UnicornsController', () => {
  let controller: UnicornsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnicornsController],
      providers: [UnicornsService],
    }).compile();

    controller = module.get<UnicornsController>(UnicornsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
