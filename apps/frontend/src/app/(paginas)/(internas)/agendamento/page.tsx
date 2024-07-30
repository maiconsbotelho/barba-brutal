'use client'
import { useState } from 'react'
import { Profissional, Servico } from '@barba/core'
import useAgendamento from '@/data/hooks/useAgendamento'
import Sumario from '@/components/agendamento/Sumario'
import ServicosInput from '@/components/agendamento/ServicosInput'
import ProfissionalInput from '@/components/agendamento/ProfissionalInput'
import Passos from '@/components/shared/Passos'
import DataInput from '@/components/agendamento/DataInput'
import Cabecalho from '@/components/shared/Cabecalho'

export default function PaginaAgendamento() {
    const [permiteProximoPasso, setPermiteProximoPasso] = useState<boolean>(false)
    const {
        profissional,
        servicos,
        data,
        selecionarProfissional,
        selecionarServicos,
        selecionarData,
        quantidadeDeSlots,
    } = useAgendamento()

    function profissionalMudou(profissional: Profissional) {
        selecionarProfissional(profissional)
        setPermiteProximoPasso(!!profissional)
    }

    function servicosMudou(servicos: Servico[]) {
        selecionarServicos(servicos)
        setPermiteProximoPasso(servicos.length > 0)
    }

    function dataMudou(data: Date) {
        selecionarData(data)

        const temData = data
        const horaValida = data.getHours() >= 8 && data.getHours() <= 21
        setPermiteProximoPasso(temData && horaValida)
    }

    return (
        <div className="flex flex-col bg-zinc-900">
            <Cabecalho
                titulo="Agendamento de Serviços"
                descricao="Seja atendido exatamente no horário marcado."
            />
            <div
                className="
                    container flex flex-col lg:flex-row 
                    items-center lg:items-start lg:justify-around 
                    gap-10 lg:gap-0 py-10
                "
            >
                <Passos
                    permiteProximoPasso={permiteProximoPasso}
                    permiteProximoPassoMudou={setPermiteProximoPasso}
                    labels={[
                        'Selecione o profissional',
                        'Informe os serviços',
                        'Escolha o horário',
                    ]}
                >
                    <ProfissionalInput
                        profissional={profissional}
                        profissionalMudou={profissionalMudou}
                    />
                    <ServicosInput servicos={servicos} servicosMudou={servicosMudou} />
                    <DataInput
                        data={data}
                        dataMudou={dataMudou}
                        quantidadeDeSlots={quantidadeDeSlots()}
                    />
                </Passos>
                <Sumario />
            </div>
        </div>
    )
}
