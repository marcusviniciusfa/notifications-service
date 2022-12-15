import { Notification } from '@/application/entities/notification';
import { NotificationsRepository } from '@/application/repositories/notifications-repository';
import { Injectable } from '@nestjs/common';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  // Inversão de dependência
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const rawNotifications = PrismaNotificationMapper.toPrisma(notification);
    await this.prismaService.notification.create({ data: rawNotifications });
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const rawNotifications = await this.prismaService.notification.findUnique({
      where: {
        id: notificationId,
      },
    });
    if (!rawNotifications) {
      return null;
    }
    const notification = PrismaNotificationMapper.toDomain(rawNotifications);
    return notification;
  }

  async save(notification: Notification): Promise<void> {
    const rawNotification = PrismaNotificationMapper.toPrisma(notification);
    await this.prismaService.notification.update({
      where: {
        id: rawNotification.id,
      },
      data: rawNotification,
    });
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const count = await this.prismaService.notification.count({
      where: {
        recipientId,
      },
    });
    return count;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const rawNotifications = await this.prismaService.notification.findMany({
      where: {
        recipientId,
      },
    });
    const notifications = rawNotifications.map(PrismaNotificationMapper.toDomain);
    return notifications;
  }
}
