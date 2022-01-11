import { Test, TestingModule } from '@nestjs/testing';
import { EditationController } from './editation.controller';

describe('EditationController', () => {
  let controller: EditationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EditationController],
    }).compile();

    controller = module.get<EditationController>(EditationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
