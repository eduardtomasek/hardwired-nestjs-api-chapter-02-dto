import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Hardwired NESTJS API')
        .setDescription('Hardwired NESTJS API documentation')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    app.use(
        '/api',
        basicAuth({
            users: { hardwired: 'supersecretpassword' },
            challenge: true,
        }),
    );

    SwaggerModule.setup('api', app, document, {
        customSiteTitle: 'Hardwired API Documentation',
        swaggerOptions: {
            tagsSorter: 'alpha',
        },
    });
    SwaggerModule.setup('api', app, document);

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
            transformOptions: { enableImplicitConversion: true },
            forbidNonWhitelisted: true,
        }),
    );

    await app.listen(3000);
}
bootstrap();
