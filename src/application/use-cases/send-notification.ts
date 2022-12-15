import { Content } from '@/application/entities/content';
import { Notification } from '@/application/entities/notification';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface ISendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface ISendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  // Dependency Inversion Principle
  constructor(private notificationsRepository: NotificationsRepository) {}

  // Single Responsibility Principle
  async execute(request: ISendNotificationRequest): Promise<ISendNotificationResponse> {
    const { recipientId, content, category } = request;
    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });
    await this.notificationsRepository.create(notification);
    return { notification };
  }
}
