import { StyleSheet, Text, View, Image } from 'react-native'
import { Agendamento } from '@barba/core'
import useAPI from '../../data/hooks/useAPI'
import React, { useEffect, useState } from 'react'
import AgendamentoItem from './AgendamentoItem'
import useUsuario from '@/src/data/hooks/useUsuario'

export default function UltimosAgendamentos() {
    const [agendamentos, setAgendamentos] = useState<Agendamento[]>()
    const { httpGet } = useAPI()
    const { usuario } = useUsuario()

    useEffect(() => {
        carregarAgendamentos()
    }, [usuario])

    async function carregarAgendamentos() {
        if(!usuario?.email) return
        const agendamentos = await httpGet(`agendamentos/${usuario?.email}`)
        setAgendamentos(agendamentos)
    }

    function renderizarConteudo() {
        if (agendamentos && agendamentos?.length > 0) {
            return (
                <View>
                    <Text style={styles.subtitulo}>Aqui estão seus últimos agendamentos:</Text>
                    {agendamentos
                        ?.reverse()
                        .map((a: Agendamento) => <AgendamentoItem agendamento={a} key={a.id} />)}
                </View>
            )
        } else {
            return (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.subtitulo}>Você ainda não tem agendamentos.</Text>
                    <Text style={styles.subtitulo}>Vamos agendar um novo serviço?</Text>
                    <Image
                        source={require('../../../assets/inicio/garoto-propaganda.png')}
                        style={styles.garotoPropaganda}
                    />
                </View>
            )
        }
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/inicio/logo-brutal.png')} style={styles.logo} />
            <Text style={styles.titulo}>Fala, {usuario?.nome}!</Text>
            {renderizarConteudo()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
    },
    titulo: {
        fontSize: 30,
        color: '#e4e4e7',
        fontWeight: '800',
    },
    subtitulo: {
        fontSize: 16,
        textAlign: 'center',
        color: '#e4e4e7',
    },
    agendamentoItemContainer: {
        backgroundColor: '#09090b',
        borderRadius: 10,
        height: 144,
    },
    agendamentoItemConteudo: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
    },
    agendamentoItemTexto: {
        fontSize: 16,
        color: 'white',
    },
    agendamentoTitulo: {
        fontSize: 40,
        color: 'white',
    },
    agendamentoHora: {
        fontSize: 25,
        color: 'white',
    },
    logo: {
        marginTop: 20,
    },
    garotoPropaganda: {
        marginBottom: 20,
        marginTop: 20,
    },
})
