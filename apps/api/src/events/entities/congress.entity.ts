import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { EventEntity } from './event.entity';
import { Certificate } from '../../certificates/entities/certificate.entity';

@Entity('congresses')
export class Congress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('int')
  min_events_for_certificate: number;

  @OneToMany(() => EventEntity, (event) => event.congress)
  events: EventEntity[];

  @OneToMany(() => Certificate, (certificate) => certificate.congress)
  certificates: Certificate[];
}
