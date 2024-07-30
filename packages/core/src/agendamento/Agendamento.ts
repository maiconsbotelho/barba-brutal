import { Profissional } from '../profissional'
import { Servico } from '../servico'

export default interface Agendamento {
    id: number
    emailCliente: string
    data: Date
    profissional: Profissional
    servicos: Servico[]
}
