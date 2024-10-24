import React from 'react';
import { View, StyleSheet, Linking, TouchableOpacity, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Importando o LinearGradient

const Claudia = ({ navigation }) => {
  return (
    
      <View style={styles.container}>
      <Image
        source={require('../../../assets/ClaudiaIcon.png')} 
        style={styles.image}
      />

       
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://claud-ia-website.vercel.app/')}>
        <Text style={styles.buttonText}>Saber Mais</Text>
      </TouchableOpacity>
    
      <Image
        source={require('../../../assets/NTJTECH.png')} 
        style={styles.image2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    paddingTop: 250, 
    backgroundColor:'#FF0017'
  },
  image: {
    width: 182, //largura da imagem
    height: 60, //altura da imagem
    marginBottom: 30, //Espaço abaixo da imagem
  },
  image2: {
    width: 182, //largura da imagem
    height: 40, //altura da imagem
    marginTop: 200, //Espaço abaixo da imagem
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
    marginVertical: 8,
    alignItems: 'center',
    width: 182 
  },
  buttonText: {
    color: '#FF0017', 
    fontSize: 16,
  },
});

export default Claudia;
