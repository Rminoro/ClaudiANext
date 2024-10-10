
// // import React, { useState, useEffect } from 'react';
// // import { View, TextInput, StyleSheet, TouchableOpacity, Text, ActivityIndicator, Modal, Button } from 'react-native';

// // const Login = ({ navigation }) => {
// //   const [id, setId] = useState('');
// //   const [cpf, setCpf] = useState('');
// //   const [senha, setSenha] = useState('');
// //   const [isAuthenticating, setIsAuthenticating] = useState(false);
// //   const [loginSuccess, setLoginSuccess] = useState(false);
// //   const [modalVisible, setModalVisible] = useState(false);
// //   const [modalMessage, setModalMessage] = useState('');

// //   const authenticateUser = async () => {
// //     // Simulação de autenticação bem-sucedida após 1 segundo
// //     return new Promise(resolve => {
// //       setTimeout(() => {
// //         // Simulando uma autenticação bem-sucedida
// //         resolve(true);
// //       }, 1000);
// //     });
// //   };

// //   const handleLogin = async () => {
// //     if (id.trim() === '' || cpf.trim() === '' || senha.trim() === '') {
// //       setModalMessage('Por favor, preencha todos os campos.');
// //       setModalVisible(true);
// //     } else {
// //       setIsAuthenticating(true);
// //       try {
// //         // Simula a autenticação
// //         await authenticateUser();
// //         setIsAuthenticating(false);
// //         setLoginSuccess(true);
// //         setModalMessage('Login bem-sucedido!');
// //         setModalVisible(true);
// //       } catch (error) {
// //         setIsAuthenticating(false);
// //         setLoginSuccess(false);
// //         setModalMessage('Login falhou. Verifique suas credenciais.');
// //         setModalVisible(true);
// //         console.error('Erro ao autenticar:', error);
// //       }
// //     }
// //   };

// //   useEffect(() => {
// //     if (loginSuccess) {
// //       navigation.navigate('TelaInicial');
// //     }
// //   }, [loginSuccess, navigation]);

// //   return (
// //     <View style={styles.container}>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="ID fornecido pela empresa"
// //         value={id}
// //         onChangeText={setId}
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="CPF"
// //         value={cpf}
// //         onChangeText={setCpf}
// //         keyboardType="numeric"
// //       />
// //       <TextInput
// //         style={[styles.input, styles.inputSenha]}
// //         placeholder="Senha"
// //         value={senha}
// //         onChangeText={setSenha}
// //         secureTextEntry
// //       />
// //       <TouchableOpacity style={styles.button} onPress={handleLogin}>
// //         <Text style={styles.buttonText}>Login</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity onPress={() => navigation.navigate('EsqueceuSenha')}>
// //         <Text style={styles.esqueceuSenha}>Esqueceu a senha? Clique aqui.</Text>
// //       </TouchableOpacity>

// //       <Modal visible={modalVisible} transparent={true} animationType="fade">
// //         <View style={styles.modalContainer}>
// //           <View style={styles.modalContent}>
// //             <Text style={styles.modalText}>{modalMessage}</Text>
// //             <Button title="Fechar" onPress={() => setModalVisible(false)} />
// //           </View>
// //         </View>
// //       </Modal>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     paddingHorizontal: 20,
// //   },
// //   input: {
// //     width: '100%',
// //     height: 50,
// //     borderWidth: 1,
// //     borderColor: 'red',
// //     borderRadius: 8,
// //     paddingHorizontal: 10,
// //     marginBottom: 20,
// //   },
// //   inputSenha: {
// //     borderColor: 'red',
// //   },
// //   button: {
// //     width: '100%',
// //     height: 50,
// //     backgroundColor: 'red',
// //     borderRadius: 8,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //   },
// //   modalContainer: {
// //     flex: 1,
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   modalContent: {
// //     backgroundColor: '#fff',
// //     padding: 20,
// //     borderRadius: 8,
// //     alignItems: 'center',
// //   },
// //   modalText: {
// //     fontSize: 16,
// //     marginBottom: 10,
// //   },
// //   esqueceuSenha: {
// //     color: 'blue',
// //     marginTop: 10,
// //     textDecorationLine: 'underline',
// //   }
  
// // });

// // export default Login;
// import React, { useState, useEffect } from 'react';
// import { View, TextInput, StyleSheet, TouchableOpacity, Text, Modal, Button } from 'react-native';
// import axios from 'axios'; // Importe o Axios

// const Login = ({ navigation }) => {
//   const [cpf, setCpf] = useState('');
//   const [senha, setSenha] = useState('');
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://192.168.15.133:5000/login', {
//         cpf: cpf,
//         senha: senha
//       });
//       if (response.data.success) {
//         // Login bem-sucedido
//         navigation.navigate('TelaInicial');
//       } else {
//         // Login falhou
//         setModalMessage(response.data.message);
//         setModalVisible(true);
//       }
//     } catch (error) {
//       console.error('Erro ao autenticar:', error);
//       setModalMessage('Erro ao autenticar. Tente novamente mais tarde.');
//       setModalVisible(true);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="CPF"
//         value={cpf}
//         onChangeText={setCpf}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={[styles.input, styles.inputSenha]}
//         placeholder="Senha"
//         value={senha}
//         onChangeText={setSenha}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>

//       <Modal visible={modalVisible} transparent={true} animationType="fade">
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalText}>{modalMessage}</Text>
//             <Button title="Fechar" onPress={() => setModalVisible(false)} />
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
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
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   inputSenha: {
//     borderColor: 'red',
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     backgroundColor: 'red',
//     borderRadius: 8,
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
//   }
// });

// export default Login;

// 

// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet, TouchableOpacity, Text, Modal, Button } from 'react-native';
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
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="CPF"
//         value={cpf}
//         onChangeText={setCpf}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={[styles.input, styles.inputSenha]}
//         placeholder="Senha"
//         value={senha}
//         onChangeText={setSenha}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
      
    

//       <Modal visible={modalVisible} transparent={true} animationType="fade">
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalText}>{modalMessage}</Text>
//             <Button title="Fechar" onPress={() => setModalVisible(false)} />
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
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
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   inputSenha: {
//     borderColor: 'red',
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     backgroundColor: 'red',
//     borderRadius: 8,
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
//   }
// });

// export default Login;
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Modal, Button } from 'react-native';
import axios from 'axios';

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

    if (cpf === '00000000000' && senha === 'admin') {
      navigation.navigate('Registro');
      return;
    }

    try {
      const response = await axios.post('http://192.168.15.133:5000/login', { cpf, senha });
      if (response.data.success) {
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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.input, styles.inputSenha]}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  inputSenha: {
    borderColor: 'red',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'red',
    borderRadius: 8,
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
    color: 'blue',
    marginTop: 10,
    textDecorationLine: 'underline',
  }
});

export default Login;
