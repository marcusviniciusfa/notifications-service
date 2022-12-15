import { Content } from './content';
import { Notification } from './notification';

describe('Entity > Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('q'.repeat(5)),
      category: 'social',
      recipientId: '1',
    });
    expect(notification).toBeTruthy();
  });
});
