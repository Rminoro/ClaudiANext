
// import React, { useEffect, useState } from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient'; // Importando o LinearGradient
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native'; // Importando useNavigation

// const TelaInicial = () => {
//   const navigation = useNavigation(); // Hook para navegação
//   const [username, setUsername] = useState(null);

//   useEffect(() => {
//     const fetchUsername = async () => {
//       const storedUsername = await AsyncStorage.getItem('username');
//       if (storedUsername) {
//         setUsername(storedUsername);

//         const perfilData = await AsyncStorage.getItem(storedUsername);
//         if (perfilData) {
//           navigation.navigate('PerfilPessoa', { username: storedUsername });
//         }
//       }
//     };

//     fetchUsername();
//   }, []);

//   return (
//     <LinearGradient
//       colors={['#000000', '#FF0000']} Degradê de preto para vermelho
//       style={styles.container}
//     >
//       <Text style={styles.header}>Bem-Vindo de volta!</Text>
      
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Perguntas')}>
//         <Text style={styles.buttonText}>Ir para Claudia</Text>
//       </TouchableOpacity>
    
//       {username && (
//           <TouchableOpacity 
//             style={styles.button} 
//             onPress={() => navigation.navigate('PerfilPessoa', { username: 'username ' })}
//           >
//             <Text style={styles.buttonText}>Ir para Perfil</Text> 
//           </TouchableOpacity>
//         )}
//         <TouchableOpacity 
//           style={styles.button} 
//           onPress={() => navigation.navigate('PerfilEdit', { username: 'username ' })} // Substitua 'seu_usuario' conforme necessário
//         >
//           <Text style={styles.buttonText}>Cadastrar Perfil</Text>
//         </TouchableOpacity>


         
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start', // Mantenha o alinhamento no início
//     alignItems: 'center',
//     paddingTop: 80, // Ajuste o espaço superior para o cabeçalho
//     paddingHorizontal: 20, // Espaço nas laterais
//   },
//   header: {
//     color: '#ffff',
//     fontSize: 32, // Aumenta o tamanho da fonte
//     textAlign: 'center', // Centraliza o texto
//     marginBottom: 50, // Ajuste o espaço abaixo do cabeçalho para os botões
//   },
//   button: {
//     backgroundColor: 'rgb(92, 92, 92)', // Cor de fundo dos botões
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//     marginVertical: 10, // Ajusta o espaço vertical entre os botões
//     alignItems: 'center',
//     width: '80%', // Largura dos botões
//   },
//   buttonText: {
//     color: '#FFFFFF', // Cor do texto dos botões
//     fontSize: 16,
//   },
// });

// export default TelaInicial;

import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const TelaInicial = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState(null);
  const [isCadastrado, setIsCadastrado] = useState(false);

  useEffect(() => {
    const fetchUsername = async () => {
      const storedUsername = await AsyncStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername);

        // Verifica se o perfil do usuário já está cadastrado
        const perfilData = await AsyncStorage.getItem(storedUsername);
        if (perfilData) {
          setIsCadastrado(true); // Usuário já está cadastrado
          navigation.navigate('PerfilPessoa', { username: storedUsername }); // Navega para PerfilPessoa
        }
      }
    };

    fetchUsername();
  }, []);

  return (
    <LinearGradient
      colors={['#000000', '#FF0000']} // Degradê de preto para vermelho
      style={styles.container}
    >
      <Text style={styles.header}>Bem-Vindo de volta!</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Perguntas')}>
        <Text style={styles.buttonText}>Ir para Claudia</Text>
      </TouchableOpacity>
    
      {username && (
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('PerfilEdit', { username })}
        >
          <Text style={styles.buttonText}>Ir para Perfil</Text> 
        </TouchableOpacity>
      )}
      
      {!isCadastrado && (
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('PerfilEdit', { username })}
        >
          <Text style={styles.buttonText}>Cadastrar Perfil</Text>
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  header: {
    color: '#ffff',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: 'rgb(92, 92, 92)',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default TelaInicial;
