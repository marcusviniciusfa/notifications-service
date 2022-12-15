import { Notification } from '@/application/entities/notification';
import { NotificationsRepository } from '@/application/repositories/notifications-repository';

export class InMemoryNotificationsRepository implements NotificationsRepository {
  public notifications: Notification[];

  constructor() {
    this.notifications = [];
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find((item) => item.id === notificationId);
    if (!notification) {
      return null;
    }
    return notification;
  }

  async save(notification: Notification): Promise<void> {
    const index = this.notifications.findIndex((item) => item.id === notification.id);
    if (index >= 0) {
      this.notifications[index] = notification;
    }
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const notifications = this.notifications.filter((notification) => {
      return notification.recipientId === recipientId;
    });
    return notifications.length;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = this.notifications.filter((notification) => {
      return notification.recipientId === recipientId;
    });
    return notifications;
  }
}
