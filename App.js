// // import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Inicio from './src/screens/principal/index'; // Importe o componente Inicio
// import { View, Image, StyleSheet } from 'react-native'; // Importe View, Image e StyleSheet

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {/* Adicione o componente Inicio como um Screen dentro do StackNavigator */}
//         <Stack.Screen name="Inicio" component={Inicio} />
//       </Stack.Navigator>
//       {/* Footer */}
//       <View style={styles.footer}>
//         <Image source={require('./assets/header.png')} style={styles.footerImage} />
//       </View>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 50, // Altura desejada para o footer
//     backgroundColor: '#fff', // Cor de fundo do footer
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   footerImage: {
//     width: 100, // Largura desejada para a imagem do footer
//     height: 30, // Altura desejada para a imagem do footer
//   },
// });

// export default App;
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './src/screens/principal/index';
import { View, Image, StyleSheet } from 'react-native';
import Login from './src/screens/login/index'
import claudia from './src/screens/claudia/index';
import TelaInicial from './src/screens/telaInicial';
import EsqueceuSenha from './src/screens/esqueceuSenha';
import PerfilPessoa from './src/screens/perfil';
import Teste from './src/api/vanna/api';
import RegisterScreen from './src/screens/registro/index';
import RedefinirSenha from './src/screens/redefinirSenha/index';
import Perguntas from './src/screens/perguntas/index';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Claudia" component={claudia}/>
        <Stack.Screen name="TelaInicial" component={TelaInicial}/>
        <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha}/>
        <Stack.Screen name="PerfilPessoa" component={PerfilPessoa}/>
        <Stack.Screen name="Teste" component={Teste}/>
        <Stack.Screen name="Registro" component={RegisterScreen}/>
        <Stack.Screen name="RedefinirSenha" component={RedefinirSenha}/>
        <Stack.Screen name="Perguntas" component={Perguntas}/>
      </Stack.Navigator>

      
    
    </NavigationContainer> 
  
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50, // Altura desejada para o footer
    backgroundColor: '#fff', // Cor de fundo do footer
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerImage: {
    width: 100, // Largura desejada para a imagem do footer
    height: 30, // Altura desejada para a imagem do footer
  },
});

export default App;
