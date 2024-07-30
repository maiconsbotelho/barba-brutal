-- CreateTable
CREATE TABLE "agendamento" (
    "id" SERIAL NOT NULL,
    "emailCliente" TEXT NOT NULL,
    "data" TIMESTAMPTZ(3) NOT NULL,
    "profissionalId" INTEGER NOT NULL,

    CONSTRAINT "agendamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AgendamentoToServico" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AgendamentoToServico_AB_unique" ON "_AgendamentoToServico"("A", "B");

-- CreateIndex
CREATE INDEX "_AgendamentoToServico_B_index" ON "_AgendamentoToServico"("B");

-- AddForeignKey
ALTER TABLE "agendamento" ADD CONSTRAINT "agendamento_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AgendamentoToServico" ADD CONSTRAINT "_AgendamentoToServico_A_fkey" FOREIGN KEY ("A") REFERENCES "agendamento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AgendamentoToServico" ADD CONSTRAINT "_AgendamentoToServico_B_fkey" FOREIGN KEY ("B") REFERENCES "servico"("id") ON DELETE CASCADE ON UPDATE CASCADE;
