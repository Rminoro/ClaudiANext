// import React from 'react';
// import { View, Image, StyleSheet } from 'react-native';
// import Swiper from 'react-native-swiper';

// const Slide = ({ images }) => {
//   return (
//     <View style={styles.container}>
//       <Swiper loop={false} showsPagination={false}>
//         {images.map((image, index) => (
//           <View style={styles.slide} key={index}>
//             <Image source={image} style={styles.image} />
//           </View>
//         ))}
//       </Swiper>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   slide: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
// });

// export default Slide;
// import React from 'react';
// import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import Swiper from 'react-native-swiper';

// const Slide = ({ images }) => {
//   const renderPagination = (index, total, context) => {
//     if (index === total - 1) {
//       return (
//         <TouchableOpacity style={styles.button} onPress={() => console.log('Redirecionar para outra página')}>
//           <Text style={styles.buttonText}>Clique aqui para redirecionar</Text>
//         </TouchableOpacity>
//       );
//     }
//     return null; // Retorna null para as outras páginas
//   };

//   return (
//     <View style={styles.container}>
//       <Swiper loop={false} showsPagination={true} renderPagination={renderPagination}>
//         {images.map((image, index) => (
//           <View style={styles.slide} key={index}>
//             <Image source={image} style={styles.image} />
//           </View>
//         ))}
//       </Swiper>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   slide: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   button: {
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     right: 20,
//     height: 50,
//     backgroundColor: '#007AFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default Slide;

/////////////------------////////////////
// import React from 'react';
// import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import Swiper from 'react-native-swiper';

// const Slide = ({ images }) => {
//   const renderPagination = (index, total, context) => {
//     if (index === total - 1) {
//       return (
//         <TouchableOpacity style={styles.button} onPress={() => console.log('Redirecionar para outra página')}>
//           <Text style={styles.buttonText}>Clique aqui para redirecionar</Text>
//         </TouchableOpacity>
//       );
//     }
//     return (
//       <View style={styles.footer}>
//         <Image source={require('../../../assets/header.png')} style={styles.footerImage} />
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Swiper loop={false} showsPagination={true} renderPagination={renderPagination}>
//         {images.map((image, index) => (
//           <View style={styles.slide} key={index}>
//             <Image source={image} style={styles.image} />
//           </View>
//         ))}
//       </Swiper>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   slide: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
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
//   button: {
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     right: 20,
//     height: 50,
//     backgroundColor: '#007AFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default Slide;

// import React from 'react';
// import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import Swiper from 'react-native-swiper';

// const Slide = ({ images }) => {
//   const renderPagination = (index, total, context) => {
//     if (index !== total - 1) {
//       return (
//         <View style={styles.footer}>
//           <Image source={require('../../../assets/header.png')} style={styles.footerImage} />
//         </View>
//       );
//     }
//     return (
//       <TouchableOpacity style={styles.button} onPress={() => console.log('Redirecionar para outra página')}>
//         <Text style={styles.buttonText}>Clique aqui para redirecionar</Text>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Swiper loop={false} showsPagination={true} renderPagination={renderPagination}>
//         {images.map((image, index) => (
//           <View style={styles.slide} key={index}>
//             <Image source={image} style={styles.image} />
//           </View>
//         ))}
//       </Swiper>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   slide: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 50,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   footerImage: {
//     width: 100,
//     height: 30,
//   },
//   button: {
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     right: 20,
//     height: 50,
//     backgroundColor: '#007AFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default Slide;
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';


const Slide = ({ images }) => {
    const navigation = useNavigation();


  const renderPagination = (index, total) => {
    if (index === total - 1) {
      return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Claudia',)}>
          <Text style={styles.buttonText}>Clique aqui para redirecionar</Text>
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.paginationContainer}>
        {[...Array(total)].map((_, pageIndex) => (
          <View key={pageIndex} style={[styles.paginationDot, pageIndex === index ? styles.activeDot : null]} />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Swiper loop={false} showsPagination={true} renderPagination={renderPagination}>
        {images.map((image, index) => (
          <View style={styles.slide} key={index}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    paginationContainer: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 20,
      left: 0, // Ajuste para 0 para centralizar horizontalmente
      right: 0, // Ajuste para 0 para centralizar horizontalmente
      justifyContent: 'center', // Centraliza horizontalmente
    },
    paginationDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#ccc',
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: '#007AFF', // Cor da bolinha ativa
    },
    button: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      height: 50,
      backgroundColor: '#007AFF',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });
  
export default Slide;
