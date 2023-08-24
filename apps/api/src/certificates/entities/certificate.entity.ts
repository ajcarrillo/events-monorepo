import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Congress } from '../../events/entities/congress.entity';
import { EventEntity } from '../../events/entities/event.entity';

@Entity('certificates')
export class Certificate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.certificates)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Congress, (congress) => congress.certificates, {
    nullable: true,
  })
  @JoinColumn({ name: 'congress_id' })
  congress?: Congress | null;

  @ManyToOne(() => EventEntity, (event) => event.certificates, {
    nullable: true,
  })
  @JoinColumn({ name: 'event_id' })
  event?: EventEntity | null;

  @Column()
  qr_code: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at?: Date;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'created_by' })
  created_by: User;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'updated_by' })
  updated_by?: User | null;
}
