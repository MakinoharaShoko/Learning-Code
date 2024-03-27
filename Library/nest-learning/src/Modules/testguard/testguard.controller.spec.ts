import { Test, TestingModule } from '@nestjs/testing';
import { TestguardController } from './testguard.controller';

describe('TestguardController', () => {
  let controller: TestguardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestguardController],
    }).compile();

    controller = module.get<TestguardController>(TestguardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
