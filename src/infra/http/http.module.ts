import { CancelNotification } from '@/application/use-cases/cancel-notification';
import { CountRecipientNotifications } from '@/application/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@/application/use-cases/get-recipient-notifications';
import { ReadNotification } from '@/application/use-cases/read-notifications';
import { SendNotification } from '@/application/use-cases/send-notification';
import { UnreadNotification } from '@/application/use-cases/unread-notifications';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification, CancelNotification, CountRecipientNotifications, ReadNotification, UnreadNotification, GetRecipientNotifications],
})
export class HttpModule {}
