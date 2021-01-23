// To create a Nest application instance, we use the core NestFactory class. 
// NestFactory exposes a few static methods that allow creating an application instance. 
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000); // Lets the application await inbound HTTP requests.
}
bootstrap();
