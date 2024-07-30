import { View } from 'react-native'
import HorariosInput from './HorariosInput'
import DiaInput from './DiaInput'

export interface DataInputProps {
    data: Date
    quantidadeDeSlots: number
    dataMudou: (data: Date) => void
}

export default function DataInput(props: DataInputProps) {
    const { data, quantidadeDeSlots, dataMudou } = props

    return (
        <View>
            <DiaInput data={data} dataMudou={dataMudou} />
            <HorariosInput data={data} qtdeHorarios={quantidadeDeSlots} dataMudou={dataMudou} />
        </View>
    )
}
