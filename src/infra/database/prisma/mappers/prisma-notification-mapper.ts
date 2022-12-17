import { Content } from '@/application/entities/content';
import { Notification } from '@/application/entities/notification';
import { Notification as PrismaNotification } from '@prisma/client';

/**
 * Classe que faz a conversão (mapeamento) do dado de uma entidade para ser representado de diferentes formas em diferentes camadas da aplicação
 */
export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
      canceledAt: notification.canceledAt,
    };
  }

  static toDomain(notification: PrismaNotification): Notification {
    return new Notification(
      {
        category: notification.category,
        content: new Content(notification.content),
        recipientId: notification.recipientId,
        canceledAt: notification.canceledAt,
        createdAt: notification.createdAt,
        readAt: notification.readAt,
      },
      notification.id,
    );
  }
}
