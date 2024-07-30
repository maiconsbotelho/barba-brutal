import { Module } from '@nestjs/common';
import { ServicoController } from './servico.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [ServicoController],
})
export class ServicoModule {}
