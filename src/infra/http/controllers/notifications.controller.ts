import { SendNotification } from '@/application/use-cases/send-notification';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBodyDTO } from '../dtos/create-notification-body-dto';

/**
 * Decorator que transforma essa classe para que ela lide com entradas recebidas de chamadas HTTP
 */
@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  /**
   * Decorator que transforma esse método para que seja chamado à partir de algum método-caminho
   */
  @Post()
  async create(@Body() body: CreateNotificationBodyDTO) {
    const { content, category, recipientId } = body;
    const { notification } = await this.sendNotification.execute({ content, category, recipientId });
    return { notification };
  }
}
