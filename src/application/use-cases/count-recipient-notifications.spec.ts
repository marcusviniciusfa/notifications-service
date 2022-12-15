import { randomUUID } from 'node:crypto';
import { NotificationFactory } from 'test/factories/notifications-factory';
import { InMemoryNotificationsRepository } from 'test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

let notificationsRepository: InMemoryNotificationsRepository;

beforeEach(() => {
  notificationsRepository = new InMemoryNotificationsRepository();
});

describe('Use cases > Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const recipientId = randomUUID();
    await notificationsRepository.create(NotificationFactory.create({ recipientId }));
    await notificationsRepository.create(NotificationFactory.create({ recipientId }));
    await notificationsRepository.create(NotificationFactory.create());
    const countRecipientNotifications = new CountRecipientNotifications(notificationsRepository);
    const { count } = await countRecipientNotifications.execute({ recipientId });
    expect(count).toEqual(2);
  });
});
