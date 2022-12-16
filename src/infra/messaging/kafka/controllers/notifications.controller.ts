import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class NotificationsController {
  @EventPattern('notifications.send-notification')
  async handleSendNotification() {
    console.log('Topic "notifications.send-notification" received a new message');
  }
}
