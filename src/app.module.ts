import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TopicsModule } from './topics/topics.module';

@Module({
  imports: [
    TopicsModule,
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
