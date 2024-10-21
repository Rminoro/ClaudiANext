import React from 'react';
import { View, StyleSheet, Linking, TouchableOpacity, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Importando o LinearGradient

const Claudia = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#000000', '#FF0000']} // Degradê de preto para vermelho
      style={styles.container}
    >
      <Image
        source={require('../../../assets/Claudia.png')} 
        style={styles.image}
      />

       
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Ir para Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://claud-ia-website.vercel.app/')}>
        <Text style={styles.buttonText}>Saber Mais</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PerfilPessoa')}>
        <Text style={styles.buttonText}>Perfil</Text>
      </TouchableOpacity>

      <Image
        source={require('../../../assets/NTJTECH.png')} 
        style={styles.image2}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    paddingTop: 250, 
  },
  image: {
    width: 182, //largura da imagem
    height: 38, //altura da imagem
    marginBottom: 30, //Espaço abaixo da imagem
  },
  image2: {
    width: 182, //largura da imagem
    height: 40, //altura da imagem
    marginTop: 200, //Espaço abaixo da imagem
  },
  button: {
    backgroundColor: 'rgb(92, 92, 92)',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF', 
    fontSize: 16,
  },
});

export default Claudia;
