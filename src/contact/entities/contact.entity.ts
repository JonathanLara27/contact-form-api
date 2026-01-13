import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('contactos') // Nombre exacto de la tabla
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 150 })
  email: string;

  @Column({ type: 'text' })
  mensaje: string;

  // Mapeo camelCase (TS) -> snake_case (DB)
  @CreateDateColumn({ name: 'fecha_envio' }) 
  fechaEnvio: Date;
}