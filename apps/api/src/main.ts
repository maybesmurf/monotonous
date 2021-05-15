import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import cookie from 'fastify-cookie';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.register(cookie);

  try {
    await app.listen(3000);
    console.log('Endpoint: http://localhost:3000/graphql');
    console.log('Altair: http://localhost:3000/altair');
  } catch (e) {
    console.error(e);
  }
}

bootstrap();
