import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ValidationException } from './application/exception/validation.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Retrieve the PORT from ConfigService (defaults to 3000 if not set)
  const port = process.env.PORT || 5000;

  // prefix
  app.setGlobalPrefix('api');

  // -- Cors setup
  app.enableCors({
    origin: [
      '*',
      'http://localhost:3000',
      'http://localhost:3001'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  //  validation pipe
  app.useGlobalPipes(
    // new ParseFormDataJsonPipe({field: 'body'}),
    new ValidationPipe({
      transform: true,
      exceptionFactory: (errors) => {
        // console.log(errors);
        return new ValidationException(errors);
      },
    }),
  );

  await app.listen(port);
  console.log(`Server is running on port http://localhost:${port}`);
}
bootstrap();
