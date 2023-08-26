import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  Index,
  OneToMany,
} from 'typeorm';
import { EventEntity } from './event.entity';

@Entity('careers')
@Unique('carreras_sii_id_reticula_unique', ['sii_id', 'reticula'])
@Index('carreras_sii_id_index', ['sii_id'])
@Index('carreras_reticula_index', ['reticula'])
@Index('carreras_clave_oficial_index', ['clave_oficial'])
export class Career {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 3, nullable: true })
  sii_id: string | null;

  @Column({ type: 'varchar', length: 255 })
  descripcion: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  grado: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  clave_oficial: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  estado: string | null;

  @Column({ type: 'varchar', length: 2, nullable: true })
  tipo: string | null;

  @Column({ type: 'varchar', length: 1, nullable: true })
  nivel_escolar: string | null;

  @Column({ type: 'smallint', nullable: true })
  reticula: number | null;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  created_at: Date | null;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date | null;

  @OneToMany(() => EventEntity, (event) => event.career)
  events: EventEntity[];
}
