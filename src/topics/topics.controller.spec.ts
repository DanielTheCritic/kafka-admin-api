import { Test, TestingModule } from '@nestjs/testing';
import { TopicsController } from './topics.controller';
import { TopicsService } from './topics.service';

const mockTopicsService = () => ({
  createTopic: jest.fn(),
  getTopics: jest.fn(),
});

describe('TopicsController', () => {
  let controller: TopicsController;
  let topicsSerivce;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TopicsController],
      providers: [
        {
          provide: TopicsService,
          useFactory: mockTopicsService,
        },
      ],
    }).compile();

    topicsSerivce = module.get<TopicsService>(TopicsService);
    controller = module.get<TopicsController>(TopicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
