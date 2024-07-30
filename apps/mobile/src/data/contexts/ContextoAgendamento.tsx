import { createContext, useCallback, useEffect, useState } from 'react'
import { Profissional, Servico } from '@barba/core'
import { DataUtils } from '@barba/core'
import useUsuario from '../hooks/useUsuario'
import useAPI from '../hooks/useAPI'

interface ContextoAgendamentoProps {
    profissional: Profissional | null
    servicos: Servico[]
    data: Date
    horariosOcupados: string[]
    duracaoTotal(): string
    precoTotal(): number
    quantidadeDeSlots(): number
    selecionarProfissional(profissional: Profissional): void
    selecionarServicos(servicos: Servico[]): void
    selecionarData(data: Date): void
    agendar(): Promise<void>
}

export const ContextoAgendamento = createContext({} as ContextoAgendamentoProps)

export function ProvedorAgendamento({ children }: { children: React.ReactNode }) {
    const [profissional, setProfissional] = useState<Profissional | null>(null)
    const [servicos, setServicos] = useState<Servico[]>([])
    const [data, setData] = useState<Date>(DataUtils.hoje())

    const { usuario } = useUsuario()
    const [horariosOcupados, setHorariosOcupados] = useState<string[]>([])
    const { httpGet, httpPost } = useAPI()

    function selecionarProfissional(profissional: Profissional) {
        setProfissional(profissional)
    }

    function selecionarServicos(servicos: Servico[]) {
        setServicos(servicos)
    }

    function duracaoTotal() {
        const duracao = servicos.reduce((acc, atual) => {
            return (acc += atual.qtdeSlots * 15)
        }, 0)

        return `${Math.trunc(duracao / 60)}h ${duracao % 60}m`
    }

    function precoTotal() {
        return servicos.reduce((acc, atual) => {
            return (acc += atual.preco)
        }, 0)
    }

    const selecionarData = useCallback(function (hora: Date) {
        setData(hora)
    }, [])

    function quantidadeDeSlots() {
        const totalDeSlots = servicos.reduce((acc, servico) => {
            return (acc += servico.qtdeSlots)
        }, 0)

        return totalDeSlots
    }

    async function agendar() {
        if (!usuario?.email) return

        await httpPost('agendamentos', {
            emailCliente: usuario.email,
            data: data!,
            profissional: profissional!,
            servicos: servicos,
        })

        limpar()
    }

    function limpar() {
        setData(DataUtils.hoje())
        setHorariosOcupados([])
        setProfissional(null)
        setServicos([])
    }

    const obterHorariosOcupados = useCallback(
        async function (data: Date, profissional: Profissional): Promise<string[]> {
            try {
                if (!data || !profissional) return []
                const dtString = data.toISOString().slice(0, 10)
                const ocupacao = await httpGet(
                    `agendamentos/ocupacao/${profissional!.id}/${dtString}`
                )
                return ocupacao ?? []
            } catch (e) {
                return []
            }
        },
        [httpGet]
    )

    useEffect(() => {
        if (!data || !profissional) return
        obterHorariosOcupados(data, profissional).then(setHorariosOcupados)
    }, [data, profissional, obterHorariosOcupados])

    return (
        <ContextoAgendamento.Provider
            value={{
                data,
                profissional,
                servicos,
                horariosOcupados,
                duracaoTotal,
                precoTotal,
                selecionarData,
                selecionarProfissional,
                quantidadeDeSlots,
                selecionarServicos,
                agendar,
            }}
        >
            {children}
        </ContextoAgendamento.Provider>
    )
}
