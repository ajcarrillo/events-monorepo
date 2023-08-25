import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Certificate } from '../../certificates/entities/certificate.entity';
import { Attendance } from '../../events/entities/attendance.entity';
import { EventStaff } from '../../events/entities/event-staff.entity';
import * as bcrypt from 'bcrypt';

export enum UserRole {
  Student = 'Student',
  Staff = 'Staff',
  Admin = 'Admin',
}

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 30 })
  first_name: string;

  @Column({ type: 'varchar', length: 30 })
  last_name: string;

  @Column({ type: 'varchar', length: 40 })
  email: string;

  @Column({ type: 'varchar', select: false })
  password: string;

  @Column('simple-array')
  roles: UserRole[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @Column({ type: 'int', nullable: true })
  updated_by: string;

  @Column({ type: 'int', nullable: true })
  created_by: string;

  @OneToMany(() => Certificate, (certificate) => certificate.user)
  certificates: Certificate[];

  @OneToMany(() => Attendance, (attendance) => attendance.user)
  attendances: Attendance[];

  @OneToMany(() => EventStaff, (staff) => staff.user)
  eventStaffPositions: EventStaff[];

  @BeforeInsert()
  @BeforeUpdate()
  async normalizeEmailAndHashPassword() {
    this.email = this.email.toLowerCase();

    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }
}
