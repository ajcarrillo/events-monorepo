import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import { EventEntity } from './event.entity';
import { User } from '../../users/entities/user.entity';

@Entity('event_staffs')
@Unique(['event', 'user'])
export class EventStaff {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => EventEntity, (event) => event.staffMembers)
  @JoinColumn({ name: 'event_id' })
  event: EventEntity;

  @ManyToOne(() => User, (user) => user.eventStaffPositions)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
