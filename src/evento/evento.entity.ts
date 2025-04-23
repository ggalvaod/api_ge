import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('eventos')// nome da tabela no banco de dados
export class Evento {
@PrimaryGeneratedColumn()
id_evento: number;
@Column()
nome_evento: string;
@Column()
local_evento: string;
@Column()
data_evento: string;
}