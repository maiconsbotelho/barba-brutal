import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import UltimosAgendamentos from '../components/agendamento/UltimosAgendamentos'

export default function Home() {
    return (
        <ImageBackground
            source={require('../../assets/inicio/fundo.png')}
            style={styles.imagemDeFundo}
        >
            <SafeAreaView style={styles.areaView}>
                <ScrollView contentContainerStyle={styles.scrollViewConteudo}>
                    <View style={styles.view}>
                        <UltimosAgendamentos />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    areaView: {
        flex: 1,
        width: '100%',
        backgroundColor: 'transparent',
    },
    scrollViewConteudo: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    view: {
        width: '100%',
        justifyContent: 'flex-start',
    },
    imagemDeFundo: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
})
