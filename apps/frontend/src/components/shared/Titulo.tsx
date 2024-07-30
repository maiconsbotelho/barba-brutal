export interface TituloProps {
    tag?: string
    principal: string
    secundario: string
}

export default function Titulo(props: TituloProps) {
    return (
        <div className="flex flex-col items-center gap-2">
            {props.tag && (
                <div className="text-sm md:text-base bg-zinc-700 px-4 py-1.5 rounded-md font-black mb-2">
                    {props.tag}
                </div>
            )}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gradient">
                {props.principal}
            </h2>
            <h3 className="text-zinc-500 md:w-[450px] px-7 md:px-0 text-center">
                {props.secundario}
            </h3>
        </div>
    )
}
