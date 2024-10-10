import React from 'react';
import { View, Button, StyleSheet, Linking } from 'react-native';

const Claudia = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Ir para Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Saber Mais"
        onPress={() => Linking.openURL('https://claud-ia-website.vercel.app/')}
      />
      <Button 
        title="Perfil"
        onPress={() => navigation.navigate('PerfilPessoa')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Claudia;
