// import React, { useState, useEffect } from 'react';
// import { View, Text, Image } from 'react-native';


// const PerfilPessoa = () => {
//   const [perfil, setPerfil] = useState(null);

//   useEffect(() => {
//     // Simulando a obtenção dos dados do arquivo JSON
//     const fetchPerfil = async () => {
//       try {
//         const response = await require('../../components/perfil.json');
//         setPerfil(response);
//       } catch (error) {
//         console.error('Erro ao obter perfil:', error);
//       }
//     };

//     fetchPerfil();
//   }, []);

//   if (!perfil) {
//     return <Text>Carregando perfil...</Text>;
//   }

//   return (
//     <View>
//       <Image source={require(perfil.foto)} style={{ width: 200, height: 200 }} />

//       <Text>Nome: {perfil.nome}</Text>
//       <Text>Estado: {perfil.estado}</Text>
//       <Text>Cargo: {perfil.cargo}</Text>
//     </View>
//   );
// };

// export default PerfilPessoa;
// import React, { useState, useEffect } from 'react';
// import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';

// const PerfilPessoa = ({ navigation }) => {
//   const [perfil, setPerfil] = useState(null);

//   useEffect(() => {
//     // Simulando a obtenção dos dados do arquivo JSON
//     const fetchPerfil = async () => {
//       try {
//         // Importando o arquivo JSON diretamente
//         const response = require('../../components/perfil.json');
//         setPerfil(response);
//       } catch (error) {
//         console.error('Erro ao obter perfil:', error);
//       }
//     };

//     fetchPerfil();
//   }, []);

//   if (!perfil) {
//     return <Text>Carregando perfil...</Text>;
//   }

//   const handleRedirecionarDiscos = () => {
//     // Adicione o código para redirecionar para a página de discos
//     navigation.navigate('Teste'); // Supondo que 'Discos' seja o nome da página de discos
//   };

//   return (
//     <View>
//       <Image source={require('../../../assets/meme.png')} style={{ width: 200, height: 200 }} />
//       <Text>Nome: {perfil.nome}</Text>
//       <Text>Estado: {perfil.estado}</Text>
//       <Text>Cargo: {perfil.cargo}</Text>

//       <TouchableOpacity style={styles.button} onPress={handleRedirecionarDiscos}>
//         <Text style={styles.buttonText}>Discos</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
// });

// export default PerfilPessoa;
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PerfilPessoa = ({ route }) => {
  const { username } = route.params; // Obtém o username dos parâmetros
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        console.log('Username recebido:', username); // Log do username
        const perfilData = await AsyncStorage.getItem(username);
        console.log('Perfil data obtido:', perfilData); // Log da data do perfil
        
        if (perfilData) {
          setPerfil(JSON.parse(perfilData));
        } else {
          console.log('Perfil não encontrado para:', username);
        }
      } catch (error) {
        console.error('Erro ao obter perfil:', error);
      }
    };

    fetchPerfil();
  }, [username]);

  if (!perfil) {
    return <Text>Carregando perfil...</Text>;
  }

  return (
    <View>
      <Image source={{ uri: perfil.foto }} style={{ width: 200, height: 200 }} />
      <Text>Nome: {perfil.nome}</Text>
      <Text>Estado: {perfil.estado}</Text>
      <Text>Cargo: {perfil.cargo}</Text>
    </View>
  );
};

export default PerfilPessoa;
