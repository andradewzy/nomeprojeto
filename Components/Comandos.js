import { StyleSheet, Text, View } from 'react-native';
import ItemComando from './ItemComando';

function Comandos() {
    const dataBase = [
      {
      titulo: 'Comando de criação do Projeto',
      conteudo: 'npx create-expo-app nomeprojeto -t blank'
      },
      {
      titulo: 'Comando executar Projeto',
      conteudo: 'npm start'
      },
      {
        titulo: 'Comando para limpar o cache',
        conteudo: 'npm start -c'
        },
    ]
    return (
        <View style={styles.containerComandos}>
              <Text>
                Revisão React Native: Mobile
                </Text>
              {
                dataBase.map(
                (item, index)=>(
                    <ItemComando 
                    key={index}
                    titulo={item.titulo}
                    conteudo={item.conteudo} />
                )
              )
              }
            </View>
    )
}

const styles = StyleSheet.create({
    containerComandos: {
      width: '95%',
      padding: 10,
      backgroundColor: '#e2e2e2',
      borderRadius: 7,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      fontWeight: 'bold',
      fontSize: 18,
      paddingTop: 15,
      paddingBottom: 15,
    }
  });

export default Comandos;