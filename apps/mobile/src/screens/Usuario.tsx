import { SafeAreaView, StyleSheet, View } from 'react-native'
import Perfil from '../components/perfil'

export default function Usuario({ navigation }: any) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, paddingTop: 15 }}>
                <Perfil navigation={navigation} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        gap: 12,
        width: '100%',
        backgroundColor: 'black',
    },
})
