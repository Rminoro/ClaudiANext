// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import Slide from '../slide'; // Importe o componente Slide

// const imagens = [
//   require('../../../assets/DockerPrint.png'), // Ajuste o caminho das imagens conforme necessário
//   require('../../../assets/maquiagem.jpg'),
//   require('../../../assets/Subauwu.jpg'),
// ];

// const Inicio = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Slide images={imagens} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default Inicio;
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Slide from '../slide/index.js';

const imagens = [
  require('../../../assets/DockerPrint.png'),
  require('../../../assets/maquiagem.jpg'),
  require('../../../assets/Subauwu.jpg'),
];

const Inicio = () => {
  return (
    <View style={styles.container}>
      {/* Renderize o Slide, passando a propriedade isLastSlide corretamente */}
      <Slide images={imagens} isLastSlide={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Inicio;

