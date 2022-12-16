import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { KafkaConsumerService } from './infra/messaging/kafka/kafka-consumer.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // Necessário para o uso de validação
  const kafkaConsumerService = app.get(KafkaConsumerService); // Injeção de dependência
  // eslint-disable-next-line prettier/prettier
  app.connectMicroservice<MicroserviceOptions>({ // Conecta um microsserviço a instância da aplicação
    strategy: kafkaConsumerService,
  });
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
