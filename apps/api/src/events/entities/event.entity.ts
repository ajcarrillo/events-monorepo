import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Congress } from './congress.entity';
import { Certificate } from '../../certificates/entities/certificate.entity';
import { Attendance } from './attendance.entity';
import { EventStaff } from './event-staff.entity';
import { Career } from './career.entity';
import { User } from '../../users/entities/user.entity';

@Entity('events')
export class EventEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('timestamp')
  date_time: Date;

  @Column()
  location: string;

  @Column()
  speaker_name: string;

  @Column()
  speaker_specialty: string;

  @ManyToOne(() => Congress, (congress) => congress.events, { nullable: true })
  @JoinColumn({ name: 'congress_id' })
  congress?: Congress | null;

  @OneToMany(() => Certificate, (certificate) => certificate.event)
  certificates: Certificate[];

  @OneToMany(() => Attendance, (attendance) => attendance.event)
  attendances: Attendance[];

  @OneToMany(() => EventStaff, (staff) => staff.event)
  staffMembers: EventStaff[];

  @ManyToOne(() => Career, (career) => career.events, { nullable: true })
  @JoinColumn({ name: 'carrera_id' })
  career?: Career | null;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'coordinator_id' })
  coordinator: User;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  created_at: Date | null;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date | null;
}
