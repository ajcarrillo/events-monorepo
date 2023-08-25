import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from './entities/event.entity';
import { Congress } from './entities/congress.entity';
import { Attendance } from './entities/attendance.entity';
import { EventStaff } from './entities/event-staff.entity';
import { CongressController } from './congress.controller';
import { CongressService } from './congress.service';

@Module({
  controllers: [EventsController, CongressController],
  providers: [EventsService, CongressService],
  imports: [
    TypeOrmModule.forFeature([EventEntity, Congress, Attendance, EventStaff]),
  ],
})
export class EventsModule {}
