import { randomUUID } from 'node:crypto';
import { NotificationFactory } from 'test/factories/notifications-factory';
import { InMemoryNotificationsRepository } from 'test/repositories/in-memory-notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';
import { UnreadNotification } from './unread-notifications';

let notificationsRepository: InMemoryNotificationsRepository;

beforeEach(() => {
  notificationsRepository = new InMemoryNotificationsRepository();
});

describe('Use cases > Unread notification', () => {
  it('should be able to unread a notification', async () => {
    const notification = NotificationFactory.create({ readAt: new Date() });
    await notificationsRepository.create(notification);
    const unreadNotification = new UnreadNotification(notificationsRepository);
    await unreadNotification.execute({ notificationId: notification.id });
    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to unread a non existing notification', () => {
    const unreadNotification = new UnreadNotification(notificationsRepository);
    expect(async () => await unreadNotification.execute({ notificationId: randomUUID() })).rejects.toThrow(NotificationNotFound);
  });
});
