import { randomUUID } from 'node:crypto';
import { NotificationFactory } from 'test/factories/notifications-factory';
import { InMemoryNotificationsRepository } from 'test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';

let notificationsRepository: InMemoryNotificationsRepository;

beforeEach(() => {
  notificationsRepository = new InMemoryNotificationsRepository();
});

describe('Use cases > Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const notification = NotificationFactory.create();
    await notificationsRepository.create(notification);
    const cancelNotification = new CancelNotification(notificationsRepository);
    await cancelNotification.execute({ notificationId: notification.id });
    expect(notificationsRepository.notifications[0].canceledAt).toEqual(expect.any(Date));
  });

  it('should not be able to cancel a non existing notification', () => {
    const cancelNotification = new CancelNotification(notificationsRepository);
    // .rejects.toThrow é utilizado porque o método execute retorna uma Promise que devolve um resolve/reject
    expect(async () => await cancelNotification.execute({ notificationId: randomUUID() })).rejects.toThrow(NotificationNotFound);
  });
});
