import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import axios from 'axios';

const RedefinirSenha = ({ navigation }) => {
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [id, setId] = useState('');

  const handleRedefinirSenha = async () => {
    try {
      if (!email || !token || !novaSenha) {
        Alert.alert('Erro', 'Preencha o email, token e a nova senha.');
        return;
      }

      // Convertendo o ID para string
      const response = await axios.post('http://192.168.15.133:5000/redefinir_senha', {
        cpf:cpf,
        id: id,
        email: email,
        token: token,
        nova_senha: novaSenha,
      });
      Alert.alert('Sucesso', response.data.message);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao redefinir senha:', error.response.data.error);
      Alert.alert('Erro', error.response.data.error);
    }
  };

  const handleBlur = () => {
    Keyboard.dismiss(); // Fecha o teclado quando o TextInput perde o foco
  };

  return (
    <TouchableWithoutFeedback onPress={handleBlur}>
      <View style={styles.container}>
      <TextInput
          style={styles.input}
          placeholder="Digite o CPF"
          value={cpf}
          onChangeText={setCpf}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Digite o ID"
          value={id}
          onChangeText={setId}
          keyboardType="numeric"
        />
         <TextInput
          style={styles.input}
          placeholder="Digite o Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Digite o Token"
          value={token}
          onChangeText={setToken}
        />
       
        <TextInput
          style={styles.input}
          placeholder="Digite a Nova Senha"
          value={novaSenha}
          onChangeText={setNovaSenha}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleRedefinirSenha}>
          <Text style={styles.buttonText}>Redefinir Senha</Text>
        </TouchableOpacity>
        <Button title="Cancelar" onPress={() => navigation.goBack()} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RedefinirSenha;
