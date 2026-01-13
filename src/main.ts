import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { logger: ['debug', 'error'] });
  
  const configService = app.get(ConfigService);
  
  app.enableCors({ origin: '*' });
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }))
  .setGlobalPrefix('api');

  const PORT = configService.get<number>('PORT') || 3001;
  const SWAGGER_PATH = configService.get<string>('SWAGGER_PATH') || 'api/docs'; 
  const SWAGGER_TITLE = configService.get<string>('SWAGGER_TITLE');
  const SWAGGER_DESC = configService.get<string>('SWAGGER_DESC');

  // 5. Configuración Swagger
  const config = new DocumentBuilder()
    .setTitle(SWAGGER_TITLE!)
    .setDescription(SWAGGER_DESC!)
    .setVersion('1.0')
    .addTag('Contactos') 
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(SWAGGER_PATH, app, document);

  await app.listen(PORT, async () => logger.debug(`contact-form-api is running in ${await app.getUrl()}/${SWAGGER_PATH}`));
}
bootstrap();