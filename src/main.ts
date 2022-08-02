import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT ?? 19997;
  
  console.log(`Listening on port ${port}...`);
  await app.listen(port);
}
bootstrap();
