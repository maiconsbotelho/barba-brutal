import { Agendamento } from '@barba/core'
import { StyleSheet, Text, View } from 'react-native'

interface AgendamentoItemProps {
    agendamento: Agendamento
}

export default function AgendamentoItem(props: AgendamentoItemProps) {
    const cor = new Date(props.agendamento.data).getTime() > Date.now() ? '#007aff' : '#AAAAAA'

    function formatarData(data: Date) {
        if (!(data instanceof Date) || isNaN(data.getTime())) {
            return ''
        }

        return data.toLocaleDateString('pt-BR', {
            dateStyle: 'long',
        })
    }

    function formatarHorario(data: Date) {
        if (!(data instanceof Date) || isNaN(data.getTime())) {
            return ''
        }
        return ` às ${String(data.getHours()).padStart(2, '0')}:${String(data.getMinutes()).padStart(2, '0')}h`
    }

    function somarTotalServicos() {
        return props.agendamento.servicos.reduce((acc, servico) => acc + servico.preco, 0)
    }

    function renderizarServicos() {
        return props.agendamento.servicos.reduce((acc, servico, index) => {
            return `${acc}${index + 1}. ${servico.nome}${index < props.agendamento.servicos.length - 1 ? ', ' : ''}`
        }, '')
    }

    return (
        <View style={{ ...styles.cartao, borderColor: cor }}>
            <Text style={{ ...styles.nomeProfissional }}>
                {props.agendamento.profissional.nome
                    ? props.agendamento.profissional.nome
                    : 'Não informado'}
            </Text>
            <Text style={{ ...styles.data, color: cor }}>
                {props.agendamento.data && formatarData(new Date(props.agendamento.data))}
                {props.agendamento.data && formatarHorario(new Date(props.agendamento.data))}
            </Text>
            <Text style={styles.servicos}>{renderizarServicos()}</Text>
            <Text style={styles.preco}>{`R$ ${somarTotalServicos()},00`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cartao: {
        backgroundColor: '#1a1a1a',
        padding: 16,
        paddingLeft: 35,
        borderRadius: 8,
        margin: 8,
        borderWidth: 0.5,
        borderRightWidth: 10,
        minWidth: '90%',
    },
    nomeProfissional: {
        fontSize: 14,
        color: '#ffffff',
        marginBottom: 4,
    },
    data: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    servicos: {
        fontSize: 12,
        color: '#ffffff',
        marginBottom: 8,
    },
    preco: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
})
