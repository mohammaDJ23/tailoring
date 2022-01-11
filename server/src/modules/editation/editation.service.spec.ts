import { Test, TestingModule } from '@nestjs/testing';
import { EditationService } from './editation.service';

describe('EditationService', () => {
  let service: EditationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EditationService],
    }).compile();

    service = module.get<EditationService>(EditationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
