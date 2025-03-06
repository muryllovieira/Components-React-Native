import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Image, TextInput, Button, ScrollView, Switch } from 'react-native';
import React, { useState } from 'react';
import imgSuperman from './assets/superman.png'

export default function App() {

  const [usuario, setUsuario] = useState('A')
  const [ligado, setLigado] = useState(false)

  function handleSwitch(){
    setLigado(!ligado)
  }

  return (
    <ScrollView>
      <View style={styles.container}>

        <Switch 
          value={ligado}
          onValueChange={handleSwitch}
          style={{ paddingTop: 50 }}
        >
        </Switch>

        <Image
          source={imgSuperman}
          style={{display: ligado ? 'flex' : 'none'}}
        />

        <TextInput
          style={styles.input}
          onChange={(text) => setUsuario(text.nativeEvent.text)
          }
          keyboardType='default'
          placeholder='digite seu numero'
          value={usuario}
        />
        <Button
          title='click aqui'
          onPress={() => Alert.alert('valor atual', usuario)}
        />

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
          onPress={() => {
            console.log("PRESSIONADO");
          }}
          onLongPress={() => { console.log("pressionamento longo") }}
        >Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />

        <View>
          <Text>ola</Text>
          <Text>mundo</Text>
        </View>

      </View>
    </ScrollView>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});
