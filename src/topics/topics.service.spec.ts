import { Test, TestingModule } from '@nestjs/testing';
import { KafkaIntegrationService } from '../kafka-integration/kafka-integration-service';
import { TopicsService } from './topics.service';

const mockKafkaIntegrationService = () => ({
  getTopics: jest.fn(),
  getOrCreateTopic: jest.fn(),
});

describe('TopicsService', () => {
  let service: TopicsService;
  let kafkaIntegrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TopicsService,
        {
          provide: KafkaIntegrationService,
          useFactory: mockKafkaIntegrationService,
        },
      ],
    }).compile();

    kafkaIntegrationService = module.get<KafkaIntegrationService>(
      KafkaIntegrationService,
    );
    service = module.get<TopicsService>(TopicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
