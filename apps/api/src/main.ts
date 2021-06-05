import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import cookie from 'fastify-cookie';
import cors from 'fastify-cors';
import { ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import merc from 'mercurius';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.enableShutdownHooks();

  app.register(cors, {
    origin: '*',
    credentials: true,
    allowedHeaders: ['cookie'],
  });
  app.register(cookie);

  // Register a global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory: (errors: ValidationError[]) => {
        return new merc.ErrorWithProps('VALIDATION_ERROR', {
          invalidArgs: errors,
        });
      },
    }),
  );

  try {
    await app.listen(3000);
    console.log('Endpoint: http://localhost:3000/graphql');
    console.log('Altair: http://localhost:3000/altair');
  } catch (e) {
    console.error(e);
  }
}

bootstrap();
