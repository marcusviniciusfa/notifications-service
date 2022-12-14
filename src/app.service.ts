import { Injectable } from '@nestjs/common';

/**
 * Decorator que transforma uma classe em um injetável
 */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
