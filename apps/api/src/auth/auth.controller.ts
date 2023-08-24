import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { MagicLoginStrategy } from './strategies/magic-login.strategy';
import { PasswordLessLoginDto } from './dto/passwordless-login.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './decorators/get-user.decorator';
import { User } from '../users/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly strategy: MagicLoginStrategy,
  ) {}

  @Post('login')
  async login(@Req() req, @Res() res, @Body() body: PasswordLessLoginDto) {
    await this.authService.validateUser(body.destination);

    return this.strategy.send(req, res);
  }

  @Get('login/callback')
  @UseGuards(AuthGuard('magiclogin'))
  async loginCallback(@GetUser() user: User) {
    return this.authService.generateTokens(user);
  }
}
