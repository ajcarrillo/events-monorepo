import { Module } from '@nestjs/common';
import { NotificationService } from './services/notification.service';
import { ResendEmail } from './classes/resend-email.class';

@Module({
  providers: [NotificationService, ResendEmail],
  exports: [NotificationService],
})
export class NotificationsModule {}
