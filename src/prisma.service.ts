import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**
 * Decorator que transforma uma classe em um injetável
 */
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  /**
   * É executado assim que a aplicação subir
   */
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
