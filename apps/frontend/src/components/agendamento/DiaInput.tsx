import { DataUtils } from '@barba/core'

export interface DiaInputProps {
    data: Date
    dataMudou(data: Date): void
}

export default function DiaInput(props: DiaInputProps) {
    function renderizarDia(data: Date) {
        if (data.getDay() === 0) {
            data.setDate(data.getDate() + 1)
        }

        const selecionado = data.getDate() === props.data.getDate()
        return (
            <div
                onClick={() => props.dataMudou(data)}
                className={`
                    flex-1 flex flex-col items-center gap-2 py-4 cursor-pointer
                    ${selecionado ? 'bg-yellow-400 text-black' : 'text-zinc-400'}
                `}
            >
                <div className="flex items-center gap-1">
                    <span className="text-2xl font-black">{data.getDate()}</span>
                    <span className="text-xs font-light uppercase">
                        {data.toLocaleDateString('pt-BR', { month: 'short' }).slice(0, 3)}
                    </span>
                </div>
                <div
                    className={`
                        text-center text-xs font-light uppercase 
                        ${selecionado ? 'bg-black/10' : 'bg-white/10'}
                        py-0.5 px-3 rounded-full
                    `}
                >
                    {data.toLocaleDateString('pt-BR', { weekday: 'short' }).slice(0, 3)}
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-5">
            <span className="text-sm uppercase text-zinc-400">Dias Disponíveis</span>
            <div className="flex gap-5 bg-zinc-950 rounded-lg overflow-hidden">
                {Array.from({ length: 7 })
                    .map((_, i) => new Date(DataUtils.hoje().getTime() + 86400000 * i))
                    .filter((date) => date.getDay() !== 0)
                    .map((date) => renderizarDia(date))}
            </div>
        </div>
    )
}
