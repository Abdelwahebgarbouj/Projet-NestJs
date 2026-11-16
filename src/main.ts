import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import process from 'node:process';

async function bootstrap() {
  process.loadEnvFile();

  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 8000;

  await app.listen(port);
}
bootstrap();