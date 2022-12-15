import { CancelNotification } from '@/application/use-cases/cancel-notification';
import { CountRecipientNotifications } from '@/application/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@/application/use-cases/get-recipient-notifications';
import { ReadNotification } from '@/application/use-cases/read-notifications';
import { SendNotification } from '@/application/use-cases/send-notification';
import { UnreadNotification } from '@/application/use-cases/unread-notifications';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateNotificationBodyDTO } from '../dtos/create-notification-body-dto';
import { NotificationViewModel } from '../view-models/notification-view-model';

/**
 * Decorator que transforma essa classe para que ela lide com entradas recebidas de chamadas HTTP
 */
@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private countRecipientNotification: CountRecipientNotifications,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private getRecipientNotifications: GetRecipientNotifications,
  ) {}

  /**
   * Decorator que transforma esse método para que seja chamado à partir de algum método-caminho
   */
  @Post()
  async create(@Body() body: CreateNotificationBodyDTO) {
    const { content, category, recipientId } = body;
    const { notification } = await this.sendNotification.execute({ content, category, recipientId });
    return {
      notification: NotificationViewModel.toHttp(notification),
    };
  }

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({ notificationId: id });
  }

  @Get('count/from/:recipientId')
  async countFromRecipient(@Param('recipientId') recipientId: string) {
    const { count } = await this.countRecipientNotification.execute({ recipientId });
    return { count };
  }

  @Get('from/:recipientId')
  async getFromRecipient(@Param('recipientId') recipientId: string) {
    const { notifications } = await this.getRecipientNotifications.execute({ recipientId });
    return { notifications: notifications.map(NotificationViewModel.toHttp) };
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({ notificationId: id });
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({ notificationId: id });
  }
}
