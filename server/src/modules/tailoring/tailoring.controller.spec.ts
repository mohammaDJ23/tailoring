import { Test, TestingModule } from '@nestjs/testing';
import { TailoringController } from './tailoring.controller';

describe('TailoringController', () => {
  let controller: TailoringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TailoringController],
    }).compile();

    controller = module.get<TailoringController>(TailoringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
