import { Controller, Get } from '@nestjs/common';
import { Auth } from '../auth/decorators/auth.decorator';
import { CareerService } from './career.service';

@Controller('careers')
@Auth()
export class CareerController {
  constructor(private readonly careerService: CareerService) {}

  @Get('dictionary')
  dictionary() {
    return this.careerService.dictionary();
  }
}
