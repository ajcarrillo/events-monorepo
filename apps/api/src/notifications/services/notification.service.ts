import { Injectable } from '@nestjs/common';
import { INotification } from '../interfaces/notification.interface';
import { ResendEmail } from '../classes/resend-email.class';
import { NotificationDetails } from '../interfaces/notification-details.interface';

@Injectable()
export class NotificationService {
  private client: INotification;

  constructor(resendEmail: ResendEmail) {
    this.client = resendEmail;
  }

  async send(notificationDetails: NotificationDetails): Promise<void> {
    await this.client.send(notificationDetails);
  }
}
