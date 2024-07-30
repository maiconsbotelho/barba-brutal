import { Injectable } from '@nestjs/common';
import { Agendamento, RepositorioAgendamento } from '@barba/core';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class AgendamentoRepository implements RepositorioAgendamento {
  constructor(private readonly prismaService: PrismaService) {}

  async criar(agendamento: Agendamento): Promise<void> {
    await this.prismaService.agendamento.create({
      data: {
        data: agendamento.data,
        emailCliente: agendamento.emailCliente,
        profissional: { connect: { id: agendamento.profissional.id } },
        servicos: {
          connect: agendamento.servicos.map((servico) => ({ id: servico.id })),
        },
      },
    });
  }

  async buscarPorEmail(email: string): Promise<Agendamento[]> {
    return this.prismaService.agendamento.findMany({
      where: {
        emailCliente: email,
        data: {
          gte: new Date(),
        },
      },
      include: {
        servicos: true,
        profissional: true,
      },
      orderBy: {
        data: 'desc',
      },
    });
  }

  async buscarPorProfissionalEData(
    profissional: number,
    data: Date,
  ): Promise<Agendamento[]> {
    const ano = data.getFullYear();
    const mes = data.getUTCMonth();
    const dia = data.getUTCDate();

    const inicioDoDia = new Date(ano, mes, dia, 0, 0, 0);
    const fimDoDia = new Date(ano, mes, dia, 23, 59, 59);

    const resultado: any = await this.prismaService.agendamento.findMany({
      where: {
        profissionalId: profissional,
        data: {
          gte: inicioDoDia,
          lte: fimDoDia,
        },
      },
      include: { servicos: true },
    });

    return resultado;
  }
}
