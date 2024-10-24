// import React, { useEffect, useState } from 'react';
// import { View, Text, Image } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const PerfilPessoa = ({ route }) => {
//   const { username } = route.params; // Obtém o username dos parâmetros
//   const [perfil, setPerfil] = useState(null);

//   useEffect(() => {
//     const fetchPerfil = async () => {
//       try {
//         console.log('Username recebido:', username); // Log do username
//         const perfilData = await AsyncStorage.getItem(username);
//         console.log('Perfil data obtido:', perfilData); // Log da data do perfil
        
//         if (perfilData) {
//           setPerfil(JSON.parse(perfilData));
//         } else {
//           console.log('Perfil não encontrado para:', username);
//         }
//       } catch (error) {
//         console.error('Erro ao obter perfil:', error);
//       }
//     };

//     fetchPerfil();
//   }, [username]);

//   if (!perfil) {
//     return <Text>Carregando perfil...</Text>;
//   }

//   return (
//     <View>
//       <Image source={{ uri: perfil.foto }} style={{ width: 200, height: 200 }} />
//       <Text>Nome: {perfil.nome}</Text>
//       <Text>Estado: {perfil.estado}</Text>
//       <Text>Cargo: {perfil.cargo}</Text>
//     </View>
//   );
// };

// export default PerfilPessoa;
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

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
      <View style={styles.header}>
        <Text style={styles.Perfil}>MEU PERFIL</Text>
        <Image source={{ uri: perfil.foto }} style={styles.profileImage} />
        <Text style={styles.name}>{perfil.nome}</Text>
        <Text style={styles.location}>{perfil.estado}</Text>
        <Text style={styles.cargo}>{perfil.cargo}</Text>
      </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
    
  },
  header: {
    backgroundColor: '#FF0000', // Cor de fundo vermelha
    width: '100%',
    alignItems: 'center',
    marginTop: 120,
    paddingVertical: 20,
    borderRadius:20
  },
  Perfil:{
  
    fontSize: 20,            // Tamanho grande
    fontWeight: 'bold',      // Negrito
    color: '#FFFFFF',// Cor vermelha
    marginBottom: 50,  
  },
  profileImage: {
    
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: '#fff',
    borderWidth: 4,
    marginBottom: 10,
  },
  name: {
    marginTop:30,
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  location: {
    marginTop:20,
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  cargo: {
    marginTop:20,
    fontSize: 18,
    color: '#fff',
    fontStyle: 'italic',
  },
});

export default PerfilPessoa;
