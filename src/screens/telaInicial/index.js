import React, { useState,navigation,navigate} from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import * as Speech from 'expo-speech'; // Importante: você precisa instalar o pacote expo-speech
import { useNavigation } from '@react-navigation/native'


const TelaInicial = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      // Aqui você pode adicionar a lógica para fazer a pesquisa com o texto digitado
      Alert.alert('Pesquisa realizada', `Você pesquisou por: ${searchQuery}`);
    } else {
      Alert.alert('Campo vazio', 'Por favor, digite algo para pesquisar.');
    }
  };

  const handleVoiceSearch = async () => {
    try {
      // Permite que o usuário fale para realizar a pesquisa
      const { status } = await Speech.requestPermissionsAsync();
      if (status === 'granted') {
        const spokenText = await Speech.recognizeAsync();
        if (spokenText) {
          setSearchQuery(spokenText);
          handleSearch();
        }
      } else {
        Alert.alert('Permissão negada', 'Você precisa permitir o acesso ao microfone para usar o comando de voz.');
      }
    } catch (error) {
      console.error('Erro ao reconhecer voz:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar reconhecer a voz.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite sua pesquisa"
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />
      <View style={styles.buttonContainer}>
        <Button title="Pesquisar" onPress={handleSearch} />
        <Button title="Comando de Voz" onPress={handleVoiceSearch} />
        <Button
                title="Ir para Claudia"
                onPress={() => navigation.navigate('Perguntas')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default TelaInicial;
