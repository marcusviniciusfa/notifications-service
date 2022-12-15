import { randomUUID } from 'node:crypto';
import { NotificationFactory } from 'test/factories/notifications-factory';
import { InMemoryNotificationsRepository } from 'test/repositories/in-memory-notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';
import { ReadNotification } from './read-notifications';

let notificationsRepository: InMemoryNotificationsRepository;

beforeEach(() => {
  notificationsRepository = new InMemoryNotificationsRepository();
});

describe('Use cases > Read notification', () => {
  it('should be able to read a notification', async () => {
    const notification = NotificationFactory.create();
    await notificationsRepository.create(notification);
    const cancelNotification = new ReadNotification(notificationsRepository);
    await cancelNotification.execute({ notificationId: notification.id });
    expect(notificationsRepository.notifications[0].readAt).toEqual(expect.any(Date));
  });

  it('should not be able to read a non existing notification', () => {
    const cancelNotification = new ReadNotification(notificationsRepository);
    expect(async () => await cancelNotification.execute({ notificationId: randomUUID() })).rejects.toThrow(NotificationNotFound);
  });
});
