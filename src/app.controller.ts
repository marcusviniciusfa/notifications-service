import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';
import { PrismaService } from './prisma.service';

/**
 * Decorator que transforma essa class para que ela lide com entradas recebidas de chamadas HTTP
 */
@Controller('notifications')
export class AppController {
  // Inversão de dependência
  constructor(private readonly prismaService: PrismaService) {}

  /**
   * Decorator que transforma esse método para que seja chamado à partir de algum método-caminho
   */
  @Get()
  async list() {
    return await this.prismaService.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;
    const data = {
      id: randomUUID(),
      content,
      category,
      recipientId,
    };
    await this.prismaService.notification.create({ data });
    return data;
  }
}
