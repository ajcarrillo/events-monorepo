import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { EventEntity } from './event.entity';

@Entity('attendances')
export class Attendance {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => User, (user) => user.attendances)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => EventEntity, (event) => event.attendances)
  @JoinColumn({ name: 'event_id' })
  event: EventEntity;

  @Column({ type: 'boolean' })
  attended: boolean;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'marked_by' })
  marked_by: User;
}
