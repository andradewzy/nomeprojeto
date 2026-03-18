import { Image, StyleSheet, Text, View, } from "react-native"

export default function DetalhesComandos(){

    return (
        <View style={styles.container}>
            <Text style={styles.tituloTela}>
                Detalhes do curso
            </Text>
            <Image
            source={require('../assets/splash-icon.png')}
            />
            <Text style={styles.image}>
                Titulo do Comando
            </Text>
            <Text style={styles.detalheComando}>
                Conteúdo do Comando
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        setStatusBarBackgroundColor: 'red'
    }
}
)