import { Test, TestingModule } from '@nestjs/testing';
import { CampersController } from './campers.controller';

describe('CampersController', () => {
  let controller: CampersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampersController],
    }).compile();

    controller = module.get<CampersController>(CampersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
