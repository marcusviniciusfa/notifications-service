import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/**
 * Injeção de dependências: automatização da instanciação de classes que recebem suas dependências por inversão de dependências (geralmente por parâmetros no construtor)
 */
