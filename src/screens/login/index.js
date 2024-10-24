// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet, TouchableOpacity, Text, Modal, Button } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';  Importando o LinearGradient
// import axios from 'axios';

// const Login = ({ navigation }) => {
//   const [cpf, setCpf] = useState('');
//   const [senha, setSenha] = useState('');
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');

//   const handleLogin = async () => {
//     if (!cpf || !senha) {
//       setModalMessage('Por favor, preencha todos os campos.');
//       setModalVisible(true);
//       return;
//     }

//     if (cpf === '00000000000' && senha === 'admin') {
//       navigation.navigate('Registro');
//       return;
//     }

//     try {
//       const response = await axios.post('http://192.168.15.133:5000/login', { cpf, senha });
//       if (response.data.success) {
//         navigation.navigate('TelaInicial');
//       } else {
//         setModalMessage(response.data.message || 'Erro ao fazer login. Tente novamente.');
//         setModalVisible(true);
//       }
//     } catch (error) {
//       console.error('Erro ao autenticar:', error);
//       setModalMessage('Erro ao fazer login. Tente novamente.');
//       setModalVisible(true);
//     }
//   };

//   const handleEsqueceuSenha = () => {
//     navigation.navigate('EsqueceuSenha');
//   };

//   return (
//     <LinearGradient
//       colors={['#000000', '#FF0000']}   Degradê de preto para vermelho
//       style={styles.container}
//     >
//       <View style={styles.innerContainer}>

      
//         <TextInput
//           style={styles.input}
//           placeholder="CPF"
//           value={cpf}
//           onChangeText={setCpf}
//           keyboardType="numeric"
//            placeholderTextColor="#1D1D1D"
//         />
//         <TextInput
//           style={[styles.input, styles.inputSenha]}
//           placeholder="Senha"
//           value={senha}
//           onChangeText={setSenha}
//           secureTextEntry
//           placeholderTextColor="#1D1D1D"
//         />
//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleEsqueceuSenha}>
//           <Text style={styles.esqueceuSenha}>Esqueceu a senha? Clique aqui.</Text>
//         </TouchableOpacity>
//       </View>

//       <Modal visible={modalVisible} transparent={true} animationType="fade">
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalText}>{modalMessage}</Text>
//             <Button title="Fechar" onPress={() => setModalVisible(false)} />
//           </View>
//         </View>
//       </Modal>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   innerContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderWidth: 1,
//     borderColor: 'red',
//     borderRadius: 50,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//     backgroundColor: 'rgba(92, 92, 92, 0.8)',
  
//       Fundo branco semitransparente
//   },
//   inputSenha: {
//     borderColor: 'red',
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     backgroundColor: 'rgb(255, 0, 23)', 
//     borderRadius: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   modalContainer: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   modalText: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   esqueceuSenha: {
//     color: '#FFFF',
//     marginTop: 10,
//     textDecorationLine: 'underline',
//   }
// });

// export default Login;
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Modal, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';  

const Login = ({ navigation }) => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleLogin = async () => {
    if (!cpf || !senha) {
      setModalMessage('Por favor, preencha todos os campos.');
      setModalVisible(true);
      return;
    }

    try {
      const response = await axios.post('http://192.168.15.133:5000/login', { cpf, senha });
      
       //Log da resposta para depuração
      console.log('Resposta da API:', response.data);

      if (response.data.success) {
         //Armazena o CPF no AsyncStorage
        await AsyncStorage.setItem('username', cpf);
        
         //Verifica se perfil está na resposta e armazena
        if (response.data.perfil) {
          await AsyncStorage.setItem('perfil', JSON.stringify(response.data.perfil));
        } else {
          console.warn('Perfil não encontrado na resposta da API.');
        }

        navigation.navigate('TelaInicial');
      } else {
        setModalMessage(response.data.message || 'Erro ao fazer login. Tente novamente.');
        setModalVisible(true);
      }
    } catch (error) {
      console.error('Erro ao autenticar:', error);
      setModalMessage('Erro ao fazer login. Tente novamente.');
      setModalVisible(true);
    }
  };

  const handleEsqueceuSenha = () => {
    navigation.navigate('EsqueceuSenha');
  };

  return (

      <View style={styles.innerContainer}>
        <Text style={styles.h1}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={cpf}
          onChangeText={setCpf}
          keyboardType="numeric"
          placeholderTextColor="#1D1D1D"
        />
        <TextInput
          style={[styles.input, styles.inputSenha]}
         
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          placeholderTextColor="#1D1D1D"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEsqueceuSenha}>
          <Text style={styles.esqueceuSenha}>Esqueceu a senha? Clique aqui.</Text>
        </TouchableOpacity>
        

      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <Button title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
        
     
      </View>
      
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
    innerContainer: {
      flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
       paddingHorizontal: 20,

     },
     h1: {
      alignSelf: 'flex-start', // Alinhamento à esquerda
      fontSize: 32,            // Tamanho grande
      fontWeight: 'bold',      // Negrito
      color: 'rgb(255, 0, 23)',// Cor vermelha
      marginBottom: 20,        // Espaçamento abaixo do título
    },
     
     input: {
       width: '100%',
       height: 50,
       borderWidth: 1,
       borderColor: 'red',
       borderRadius: 20,
       paddingHorizontal: 10,
       marginBottom: 20,
       backgroundColor: 'rgba(92, 92, 92, 0.3)',
    
     },
     inputSenha: {
       borderColor: 'red',
     },
     button: {
       width: '100%',
       height: 50,
       backgroundColor: 'rgb(255, 0, 23)', 
       borderRadius: 20,
       alignItems: 'center',
       justifyContent: 'center',
     },
     buttonText: {
       color: '#fff',
       fontSize: 16,
     },
     modalContainer: {
       flex: 1,
       backgroundColor: 'rgba(0, 0, 0, 0.5)',
       alignItems: 'center',
       justifyContent: 'center',
     },
     modalContent: {
       backgroundColor: '#fff',
       padding: 20,
       borderRadius: 8,
       alignItems: 'center',
     },
     modalText: {
       fontSize: 16,
       marginBottom: 10,
     },
     esqueceuSenha: {
       color: '#000000',
       marginTop: 10,
       textDecorationLine: 'underline',
     },
     footerImage:{
      maxWidth:'100%',
      maxHeight:'100%',
      objectFit:'contain',
      }
   });

export default Login;
