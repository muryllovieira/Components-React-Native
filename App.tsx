import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View
        onTouchStart={(event) => {
          Alert.alert('Começou a clicar', 'Clique iniciado')
        }}
        onTouchEnd={(evento) => {
          Alert.alert('Acabou de clicar', 'Clique finalizado')
        }}
      >
        <Text style={[styles.texto, styles.border]}>Olá</Text>
      </View>

      <Text selectable={true}
        onPress={() => {console.log("PRESSIONADO");
        }}
        onLongPress={() => {console.log("pressionamento longo")}}
      >Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />

      <View>
        <Text>ola</Text>
        <Text>mundo</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderColor: 'red',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});
