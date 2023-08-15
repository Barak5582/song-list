import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors()); // Enable CORS

  app.useGlobalPipes(new ValidationPipe()); // Use ValidationPipe for request validation

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Song List API')
    .setDescription('API to manage song list')
    .setVersion('1.0')
    .addTag('songs')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
