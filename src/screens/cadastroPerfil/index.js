// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Corrigido a importação
// import { launchImageLibrary } from 'react-native-image-picker';


// const PerfilEdit = ({ route, navigation }) => {
//   const { username } = route.params; // Recebendo o username
//   const [nome, setNome] = useState('');
//   const [estado, setEstado] = useState('');
//   const [cargo, setCargo] = useState('');
//   const [foto, setFoto] = useState('');

//   const handleSave = async () => {
//     if (!nome || !estado || !cargo || !foto) {
//       alert('Por favor, preencha todos os campos.'); // Validação simples
//       return;
//     }

//     const perfilUsuario = { nome, estado, cargo, foto };
//     await AsyncStorage.setItem(username, JSON.stringify(perfilUsuario)); // Salva o perfil com a chave sendo o nome de usuário
//     navigation.navigate('PerfilPessoa', { perfilUsuario }); // Navega para a tela de perfil
//   };

//   const handleSelectImage = () => {
//     const options = {
//       mediaType: 'photo',
//       includeBase64: false,
//     };

//     launchImageLibrary(options, (response) => {
//       if (response.didCancel) {
//         console.log('Usuário cancelou a seleção de imagem');
//       } else if (response.error) {
//         console.log('Erro ao selecionar imagem: ', response.error);
//       } else {
//         setFoto(response.assets[0].uri); // Definindo a URI da imagem
//       }
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput 
//         placeholder="Nome" 
//         value={nome} 
//         onChangeText={setNome} 
//         style={styles.input}
//       />
//       <TextInput 
//         placeholder="Estado" 
//         value={estado} 
//         onChangeText={setEstado} 
//         style={styles.input}
//       />
//       <TextInput 
//         placeholder="Cargo" 
//         value={cargo} 
//         onChangeText={setCargo} 
//         style={styles.input}
//       />
//      <Button title="Selecionar Foto" onPress={handleSelectImage} />
      
//       {foto && <Image source={{ uri: foto }} style={{ width: 100, height: 100 }} />}
      
      
//       <Button title="Salvar" onPress={handleSave} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//   },
// });

// export default PerfilEdit;
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import * as ImagePicker from 'expo-image-picker';

const PerfilEdit = ({ route, navigation }) => {
  const { username } = route.params; 
  const [nome, setNome] = useState('');
  const [estado, setEstado] = useState('');
  const [cargo, setCargo] = useState('');
  const [foto, setFoto] = useState('');

  const handleSave = async () => {
    if (!nome || !estado || !cargo || !foto) {
      alert('Por favor, preencha todos os campos.'); 
      return;
    }

    const perfilUsuario = { nome, estado, cargo, foto };
    await AsyncStorage.setItem(username, JSON.stringify(perfilUsuario)); 
    navigation.navigate('Inicio'); // Redireciona para a tela inicial após salvar
  };

  const handleSelectImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permissão de acesso à galeria é necessária!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFoto(result.assets[0].uri); 
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Nome" 
        value={nome} 
        onChangeText={setNome} 
        style={styles.input}
      />
      <TextInput 
        placeholder="Estado" 
        value={estado} 
        onChangeText={setEstado} 
        style={styles.input}
      />
      <TextInput 
        placeholder="Cargo" 
        value={cargo} 
        onChangeText={setCargo} 
        style={styles.input}
      />
      <Button title="Selecionar Foto" onPress={handleSelectImage} />
      {foto && <Image source={{ uri: foto }} style={{ width: 100, height: 100 }} />}
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default PerfilEdit;
