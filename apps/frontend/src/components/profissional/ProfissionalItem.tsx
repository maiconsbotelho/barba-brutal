import {
    IconBrandYoutube,
    IconBrandInstagram,
    IconBrandX,
    IconBrandLinkedin,
} from '@tabler/icons-react'
import { Profissional } from '@barba/core'
import Image from 'next/image'
import Avaliacao from '../shared/Avaliacao'

export interface ProfissionalItemProps {
    profissional: Profissional
}

export default function ProfissionalItem(props: ProfissionalItemProps) {
    return (
        <div
            className="
                flex flex-col items-center p-1
                bg-zinc-800 rounded-lg
            "
        >
            <div className="relative h-72 w-full">
                <Image
                    src={props.profissional.imagemUrl}
                    fill
                    alt={props.profissional.nome}
                    className="object-cover object-top rounded-t-lg"
                />
            </div>
            <div className="flex flex-col p-4 gap-5">
                <span className="text-2xl font-black">{props.profissional.nome}</span>
                <span className="text-sm text-zinc-400">{props.profissional.descricao}</span>

                <div className="flex gap-3 flex-wrap">
                    <Avaliacao
                        valor={props.profissional.avaliacao}
                        quantidade={props.profissional.quantidadeAvaliacoes}
                    />
                </div>

                <div className="flex gap-3 text-zinc-300">
                    <IconBrandYoutube stroke={1} />
                    <IconBrandInstagram stroke={1} />
                    <IconBrandX stroke={1} />
                    <IconBrandLinkedin stroke={1} />
                </div>
            </div>
        </div>
    )
}
