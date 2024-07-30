import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Controller('servico')
export class ServicoController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  buscarTodos() {
    return this.prisma.servico.findMany();
  }
}
