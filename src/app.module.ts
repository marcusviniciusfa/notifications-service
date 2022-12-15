import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}

/**
 * Injeção de dependências: automatização da instanciação de classes que recebem suas dependências por inversão de dependências (geralmente por parâmetros no construtor)
 */
