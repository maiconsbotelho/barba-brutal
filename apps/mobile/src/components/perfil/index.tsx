import { TelefoneUtils } from '@barba/core'
import { StyleSheet, View, Image, Text, Pressable } from 'react-native'
import useUsuario from '@/src/data/hooks/useUsuario'
import React from 'react'

export default function Perfil({ navigation }: any) {
    const { usuario, sair } = useUsuario()

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/avatar.png')} style={styles.avatar} />
            <Text style={styles.destaque}>Fala, {usuario?.nome}!</Text>
            <Text style={styles.texto}>E-mail: {usuario?.email.toLowerCase()}</Text>
            <Text style={styles.texto}>Telefone: {TelefoneUtils.formatar(usuario?.telefone!)}</Text>
            <Pressable
                style={styles.botao}
                onPress={() => {
                    sair()
                    navigation.replace('Cadastro')
                }}
            >
                <Text style={styles.textoBotao}>SAIR</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 48,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: '45%',
        height: '45%',
        borderRadius: 9999,
        marginRight: 12,
    },
    destaque: {
        fontSize: 28,
        fontWeight: '600',
        color: '#fff',
        margin: 5,
    },
    texto: {
        marginTop: 2,
        fontSize: 18,
        fontWeight: '400',
        color: '#A9A9A9',
    },
    botao: {
        margin: 30,
        width: '35%',
        height: 45,
        backgroundColor: '#EF4444',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    textoBotao: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
