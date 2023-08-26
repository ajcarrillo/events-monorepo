import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from './entities';
import { Congress } from './entities';
import { Attendance } from './entities';
import { EventStaff } from './entities';
import { CongressController } from './congress.controller';
import { CongressService } from './congress.service';
import { Career } from './entities';
import { CareerService } from './career.service';
import { CareerController } from './career.controller';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [EventsController, CongressController, CareerController],
  providers: [EventsService, CongressService, CareerService],
  imports: [
    TypeOrmModule.forFeature([
      EventEntity,
      Congress,
      Attendance,
      EventStaff,
      Career,
    ]),
    UsersModule,
  ],
})
export class EventsModule {}
