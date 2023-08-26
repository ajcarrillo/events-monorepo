import { NotificationDetails } from './notification-details.interface';

export interface INotification {
  send: (notificationDetails: NotificationDetails) => Promise<void>;
}
