import { PassportStrategy } from '@nestjs/passport';
import Strategy from 'passport-magic-login';
import { Injectable, Logger } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { NotificationService } from '../../notifications/services/notification.service';

@Injectable()
export class MagicLoginStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(MagicLoginStrategy.name);

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
  ) {
    super({
      secret: process.env.MAGIC_SECRET,
      jwtOptions: {
        expiresIn: '5m',
      },
      callbackUrl: 'http://localhost:3000/api/auth/login/callback',
      sendMagicLink: async (email, href) => {
        this.logger.debug(`sendMagicLink: ${email} ${href}`);

        await this.notificationService.send({
          from: 'onboarding@resend.dev',
          to: email,
          subject: 'Login to Resend',
          content: `<a href="${href}">Login to Resend</a>`,
        });
      },
      verify: async (payload, callback) => {
        callback(null, this.validate(payload));
      },
    });
  }

  async validate(payload: { email: string }) {
    return await this.authService.validateUser(payload.email);
  }
}
