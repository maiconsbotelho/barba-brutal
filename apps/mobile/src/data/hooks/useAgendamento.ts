import { useContext } from 'react'
import { ContextoAgendamento } from '../contexts/ContextoAgendamento'

const useAgendamento = () => useContext(ContextoAgendamento)
export default useAgendamento
