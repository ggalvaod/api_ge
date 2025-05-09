import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evento } from './evento/evento.entity';
import { EventoModule } from './evento/evento.module';
import { RateLimitMiddleware } from './evento/rate-limit.middleware';

@Module({
imports: [
TypeOrmModule.forRoot({
type: 'mysql',
host: 'localhost',
port: 3306,
username: 'root',
password: '', // ou '123', dependendo do seu XAMPP
database: 'bd_api',
entities: [Evento],
synchronize: true, // em produção, mude para false
}),
EventoModule,
],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(RateLimitMiddleware)
        .forRoutes('*'); // aplica o middleware para todas as rotas
    }
  }