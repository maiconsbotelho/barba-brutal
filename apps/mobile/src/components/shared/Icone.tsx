import { Ionicons } from '@expo/vector-icons'

export interface IconeProps {
    nome: React.ComponentProps<typeof Ionicons>['name']
    color?: string
    tamanho?: number
}

export default function Icone(props: IconeProps) {
    return <Ionicons name={props.nome} size={props.tamanho ?? 28} {...props} />
}
