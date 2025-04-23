import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evento } from './evento.entity';
import { EventoService } from './evento.service';
import { EventoController } from './evento.controller';
@Module({
 imports: [TypeOrmModule.forFeature([Evento])], // <-- aqui está a mágica!
 providers: [EventoService],
 controllers: [EventoController],
})
export class EventoModule {}