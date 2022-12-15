import { NotificationsRepository } from '@/application/repositories/notifications-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository, // Quando precisar da classe abstrata
      useClass: PrismaNotificationsRepository, // Use essa classe
    },
  ],
  exports: [NotificationsRepository], // Para que possa ser importado no HttpModule
})
export class DatabaseModule {}
