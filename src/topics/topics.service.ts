import { Injectable } from '@nestjs/common';
import { CreateTopicDto } from './dto/create-topic.dto';
import { KafkaIntegrationService } from '../kafka-integration/kafka-integration-service';
import { GetKafkaTopicDto } from '../kafka-integration/dto/get-kafka-topic.dto';

@Injectable()
export class TopicsService {
  constructor(private kafkaIntegrationService: KafkaIntegrationService) {}

  async getTopics(): Promise<GetKafkaTopicDto[]> {

   return await this.kafkaIntegrationService.getTopics();
  }

  async createTopic(createTopicDto: CreateTopicDto): Promise<void> {

    await this.kafkaIntegrationService.getOrCreateTopic({
      name: createTopicDto.name,
      partitions: createTopicDto.partitions,
      replicas: createTopicDto.replicas,
    });
  }
}
