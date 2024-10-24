
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
import { View, TouchableOpacity, Text, StyleSheet,Image } from 'react-native';
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
    <View style={styles.container}>
    
      <View style={styles.headerContainer}>

        <Text style={styles.header}>Bem-Vindo de volta!{'\n'}Como posso ajudar?</Text>

      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Perguntas')}>
        <Text style={styles.buttonText}>Claudia</Text>
      </TouchableOpacity>
    
      {username && (
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('PerfilPessoa', { username })}
        >
          <Text style={styles.buttonText}>Meu Perfil</Text> 
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
    
    
        <Image 
          source={require('../../../assets/ntjtechfooter.png')}
          style={styles.footerImage}
        />
     

    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  header: {
    
    color: '#FFFFFF',
    fontSize: 32,
    alignItems:'flex-start',
    marginBottom: 50,
    height: 'auto',    
    borderBottomLeftRadius:20,
    marginLeft:20

  },
  headerContainer:{
    backgroundColor: '#FF0017', // Fundo vermelho para o cabeçalho
    paddingVertical: 20,        // Pode ajustar a altura aqui
    width: '100%',              // Preenche toda a largura
       // Alinha o texto no centro
    paddingHorizontal: 0,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
  },
  button: {
    backgroundColor: '#FF0017',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginVertical: 10,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  footerImage:{
  maxWidth:'100%',
  maxHeight:'100%',
  objectFit:'contain',
  }

});

export default TelaInicial;
