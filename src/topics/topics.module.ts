import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KafkaIntegrationModule } from 'src/kafka-integration/kafka-integration.module';
import { TopicsController } from './topics.controller';
import { TopicsService } from './topics.service';

@Module({
  imports: [KafkaIntegrationModule, ConfigModule],
  controllers: [TopicsController],
  providers: [TopicsService],
})
export class TopicsModule {}
