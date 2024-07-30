import { Agendamento, ObterHorariosOcupados } from '@barba/core';
import { AgendamentoRepository } from './agendamento.repository';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('agendamentos')
export class AgendamentoController {
  constructor(private readonly repo: AgendamentoRepository) {}

  @Post()
  criar(@Body() agendamento: Agendamento) {
    return this.repo.criar(agendamento);
  }

  @Get(':email')
  buscarPorEmail(@Param('email') email: string) {
    return this.repo.buscarPorEmail(email);
  }

  @Get('ocupacao/:profissional/:data')
  buscarOcupacaoPorProfissionalEData(
    @Param('profissional') profissional: string,
    @Param('data') dataParam: string,
  ) {
    const casoDeUso = new ObterHorariosOcupados(this.repo);
    return casoDeUso.executar(+profissional, new Date(dataParam));
  }
}
