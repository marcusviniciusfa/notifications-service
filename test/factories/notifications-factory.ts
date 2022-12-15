import { Content } from '@/application/entities/content';
import { INotificationProps, Notification } from '@/application/entities/notification';
import { randomUUID } from 'node:crypto';

type Override = Partial<INotificationProps>;

export class NotificationFactory {
  public static create(override: Override = {}): Notification {
    return new Notification({
      content: new Content('q'.repeat(5)),
      category: 'social',
      recipientId: randomUUID(),
      ...override,
    });
  }
}
