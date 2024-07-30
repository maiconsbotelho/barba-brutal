import { TelefoneUtils } from '@barba/core'
import { StyleSheet, Text, TextInput, Pressable, View, ImageBackground, Image } from 'react-native'
import useUsuario from '../data/hooks/useUsuario'
import React, { useEffect, useState } from 'react'
import useFormUsuario from '../data/hooks/useFormUsuario'

export default function Cadastro({ navigation }: any) {
    
    const { usuario } = useUsuario()
    const {
        nome, setNome, email, setEmail, telefone, setTelefone, errors, cadastrar,
    } = useFormUsuario()

    useEffect(() => {
        if (usuario) {
            navigation?.replace('Principal')
        }
    }, [usuario])

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/inicio/fundo.png')}
                style={styles.imagemDeFundo}
            >
                <View style={styles.conteudo}>
                    <Image
                        source={require('../../assets/inicio/logo-brutal.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.titulo}>🤘 DO CLASSICO AO ROCK 🤘</Text>
                    <Text style={styles.descricao}>
                        Cabelo afiado, barba de lenhador e mãos de motoqueiro, tudo ao som de rock
                        pesado!
                    </Text>
                    <View style={styles.formulario}>
                        <Text style={styles.label}>Nome</Text>
                        <TextInput
                            style={[styles.input, errors.nome ? styles.inputError : null]}
                            placeholder="Digite seu nome"
                            placeholderTextColor="#666"
                            value={nome}
                            onChangeText={setNome}
                        />
                        {errors.nome ? <Text style={styles.errorText}>{errors.nome}</Text> : null}

                        <Text style={styles.label}>E-mail</Text>
                        <TextInput
                            style={[styles.input, errors.email ? styles.inputError : null]}
                            placeholder="Digite seu e-mail"
                            placeholderTextColor="#666"
                            value={email.toLowerCase()}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />
                        {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

                        <Text style={styles.label}>Telefone</Text>
                        <TextInput
                            style={[styles.input, errors.telefone ? styles.inputError : null]}
                            placeholder="Digite seu telefone"
                            placeholderTextColor="#666"
                            value={TelefoneUtils.formatar(telefone)}
                            onChangeText={(tel) => setTelefone(TelefoneUtils.desformatar(tel))}
                            keyboardType="phone-pad"
                        />
                        {errors.telefone ? (
                            <Text style={styles.errorText}>{errors.telefone}</Text>
                        ) : null}
                    </View>
                    <Pressable style={styles.button} onPress={cadastrar}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        color: '#fff',
        alignSelf: 'flex-start',
        marginBottom: 8,
        marginLeft: 10,
        fontSize: 16,
    },
    input: {
        width: '100%',
        minWidth: 280,
        height: 40,
        backgroundColor: '#1e1e1e',
        borderRadius: 5,
        paddingHorizontal: 10,
        color: '#fff',
        marginBottom: 20,
    },
    inputError: {
        borderColor: 'red',
        borderWidth: 1,
    },
    errorText: {
        color: 'red',
        marginBottom: 20,
        marginLeft: 10,
        alignSelf: 'flex-start',
    },
    button: {
        width: '40%',
        height: 40,
        backgroundColor: '#22c55e',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    imagemDeFundo: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    formulario: {
        padding: 40,
    },
    logo: {
        marginTop: 20,
        marginBottom: 20,
    },
    conteudo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    descricao: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
        marginHorizontal: 20,
    },
})
