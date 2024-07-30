import { useServicos } from '@barba/ui'
import { Servico } from '@barba/core'
import { Image, StyleSheet, Text, Pressable, View } from 'react-native'
import imagens from '../../data/constants/imagens'

interface ServicosInputProps {
    servicos: Servico[]
    servicosMudou: (servicos: Servico[]) => void
}

function Opcao(props: { servico: Servico; onClick: (s: Servico) => void; selecionado?: boolean }) {
    return (
        <View
            key={props.servico.id}
            style={{
                ...styles.servicoCard,
                backgroundColor: props.selecionado ? '#22c55e' : '#18181b',
            }}
        >
            <Pressable
                onPress={() => {
                    props.onClick(props.servico)
                }}
            >
                <View>
                    <Image
                        style={styles.imagemServico}
                        source={imagens.servicos.find((s) => s.id === props.servico.id)?.imagem}
                    />
                    <Text style={styles.textoServico}>{props.servico.nome}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default function ServicosInput(props: ServicosInputProps) {
    const { servicos, servicosMudou } = props
    const { servicos: todosOsServicos } = useServicos()

    function alternarMarcacaoServico(servico: Servico) {
        const encontrado = servicos.find((s) => s.id === servico.id)
        servicosMudou(
            encontrado ? servicos.filter((s) => s.id !== servico.id) : [...servicos, servico]
        )
    }

    return (
        <View style={styles.container}>
            {todosOsServicos.map((s) => (
                <Opcao
                    key={s.id}
                    onClick={alternarMarcacaoServico}
                    servico={s}
                    selecionado={servicos.some((serv) => serv.id === s.id)}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 40,
        gap: 6,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    servicoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#18181b',
        borderRadius: 8,
        padding: 2,
    },
    servicoCard: {
        borderRadius: 8,
        padding: 2,
    },
    textoServico: {
        color: 'white',
        paddingVertical: 5,
        textAlign: 'center',
    },
    imagemServico: {
        width: 122,
        height: 122,
        borderRadius: 6,
    },
})
