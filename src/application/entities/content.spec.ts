import { Content } from './content';

describe('Entity > Notification > Content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('q'.repeat(5));
    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with last than 5 characters', () => {
    expect(() => new Content('q')).toThrow(new Error(`Content length error.`));
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('q'.repeat(241))).toThrow(new Error('Content length error.'));
  });
});
