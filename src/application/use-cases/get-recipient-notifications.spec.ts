import { randomUUID } from 'node:crypto';
import { NotificationFactory } from 'test/factories/notifications-factory';
import { InMemoryNotificationsRepository } from 'test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

let notificationsRepository: InMemoryNotificationsRepository;

beforeEach(() => {
  notificationsRepository = new InMemoryNotificationsRepository();
});

describe('Use cases > Get recipient notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const recipientId = randomUUID();
    await notificationsRepository.create(NotificationFactory.create({ recipientId }));
    await notificationsRepository.create(NotificationFactory.create({ recipientId }));
    await notificationsRepository.create(NotificationFactory.create());
    const getRecipientNotifications = new GetRecipientNotifications(notificationsRepository);
    const { notifications } = await getRecipientNotifications.execute({ recipientId });
    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(expect.arrayContaining([expect.objectContaining({ recipientId }), expect.objectContaining({ recipientId })]));
  });
});
