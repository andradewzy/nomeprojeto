import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DetalhesComandos from './DetalhesComandos';
import { useNavigation } from '@react-navigation/native';

function ItemComando({titulo, conteudo}) {
    const navigation = useNavigation();
    return (
        <View style={styles.item}>
                <Text style={styles.titulo}>
                  {titulo}
                </Text>
                <Text style={styles.conteudo}>
                    {conteudo}
                </Text>
                <TouchableOpacity style={styles.botao}
                    onPress={()=>navigation.navigate("DetalhesComandos")}
                >
                    <Text style={styles.textoBotao}>Ver mais detalhes</Text>
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    item: {
        marginTop:15,
        width:'92%',
        borderRadius: 12,
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E1E8ED',
        shadowColor: '#000',
        shadowOffset: { widht: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    titulo:{
        fontWeight: '700',
        fontSize: 18,
        color: '#146127',
        marginBottom: 4,
    },
    conteudo:{
        fontSize: 16,
        color: '#4B5563',
        lineHeight: 22,
    },
    botao:{
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor:'#157502ff',
        borderRadius: 8,
        padding: 10,
    },
    textoBotao:{
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 18
    }
});

export default ItemComando;