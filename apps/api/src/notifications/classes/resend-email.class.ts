import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { INotification } from '../interfaces/notification.interface';
import { Resend } from 'resend';
import { NotificationDetails } from '../interfaces/notification-details.interface';

@Injectable()
export class ResendEmail implements INotification {
  private logger = new Logger(ResendEmail.name);
  api_key: string = 're_ACG9AcQF_Bccok9VwDaE4b7cm5q7cULtN';

  getResendInstance() {
    return new Resend(this.api_key);
  }

  async send(notificationDetails: NotificationDetails): Promise<void> {
    const resend = this.getResendInstance();
    const { from, subject, to, content } = notificationDetails;

    try {
      await resend.emails.send({
        from,
        to,
        subject,
        html: content,
      });
    } catch (e) {
      this.logger.error(e);
      throw new InternalServerErrorException(e);
    }
  }
}
