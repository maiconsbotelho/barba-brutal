import { Module } from '@nestjs/common';
import { AgendamentoController } from './agendamento.controller';
import { AgendamentoRepository } from './agendamento.repository';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [AgendamentoController],
  providers: [AgendamentoRepository],
})
export class AgendamentoModule {}
