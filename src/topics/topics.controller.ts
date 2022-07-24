import { Body, Controller, Get, Post } from '@nestjs/common';
import { GetKafkaTopicDto } from 'src/kafka-integration/dto/get-kafka-topic.dto';
import { CreateTopicDto } from './dto/create-topic.dto';
import { Topic } from './topic.entity';
import { TopicsService } from './topics.service';

@Controller('topics')
export class TopicsController {

    constructor(private topicsService: TopicsService) {}

    @Get()
    getTopics() : Promise<GetKafkaTopicDto[]> {
        return this.topicsService.getTopics();
    }

    @Post()
    createTopic(
        @Body() createTopicDto: CreateTopicDto): Promise<void> {

        return this.topicsService.createTopic(createTopicDto);
    }
}
