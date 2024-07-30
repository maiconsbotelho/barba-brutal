import Agendamento from './Agendamento'

export default interface RepositorioAgendamento {
    criar(agendamento: Agendamento): Promise<void>
    buscarPorEmail(email: string): Promise<Agendamento[]>
    buscarPorProfissionalEData(profissional: number, data: Date): Promise<Agendamento[]>
}
