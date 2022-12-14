import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Decorator que transforma essa class para que ela lide com entradas recebidas de chamadas HTTP
 */
@Controller()
export class AppController {
  // Inversão de dependência
  constructor(private readonly appService: AppService) {}

  /**
   * Decorator que transforma esse método para que seja chamado à partir de algum método-caminho
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
