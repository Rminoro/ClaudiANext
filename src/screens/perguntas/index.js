// // import React, { useState } from 'react';
// // import { View, TextInput, Button, Image, StyleSheet, ScrollView, Text } from 'react-native';
// // import axios from 'axios';

// // const Perguntas = () => {
// //     const [question, setQuestion] = useState('');
// //     const [graph, setGraph] = useState(null);
// //     const [error, setError] = useState('');
// //     const [data, setData] = useState([]);

// //     const handleQuestionSubmit = async (questionToSubmit) => {
// //         try {
// //             const response = await axios.post('http://192.168.15.133:5001/process_question', {
// //                 question: questionToSubmit
// //             });
// //             console.log("Resposta do servidor:", response.data);
// //             console.log("Enviando pergunta:", questionToSubmit);

// //             if (response.data.graph) {
// //                 console.log("Base64 do gráfico:", response.data.graph); // Adicionando log da string Base64
// //                 setGraph(response.data.graph);
// //             }
// //             if (response.data.data) {
// //                 setData(response.data.data);
// //             }
// //             setError('');
// //         } catch (error) {
// //             console.error("Erro ao enviar a pergunta", error);
// //             setError("Erro ao processar a pergunta. Verifique a conexão com o servidor.");
// //         }
// //     };

// //     const predefinedQuestions = [
// //         "Qual é o total de vendas por mês deste ano?",
// //         "Qual é o total de vendas do ano passado?",
// //         "Qual produto teve mais vendas?"
// //     ];

// //     return (
// //         <ScrollView contentContainerStyle={styles.container}>
// //             <TextInput
// //                 placeholder="Digite sua pergunta..."
// //                 value={question}
// //                 onChangeText={setQuestion}
// //                 style={styles.input}
// //             />
// //             <Button title="Enviar" onPress={() => handleQuestionSubmit(question)} />
// //             {predefinedQuestions.map((q, index) => (
// //                 <Button
// //                     key={index}
// //                     title={q}
// //                     onPress={() => handleQuestionSubmit(q)}
// //                 />
// //             ))}
// //             {error ? <Text style={styles.error}>{error}</Text> : null}

// //             {/* Verifique se o gráfico foi gerado */}
// //             {graph ? (
// //                 <Image
// //                     key={Math.random()} // Garante que o cache não será usado
// //                     source={{ uri: `data:image/png;base64,${graph}` }}
// //                     style={{ width: '100%', height: 400, resizeMode: 'contain' }} // Ajuste de tamanho
// //                 />
// //             ) : (
// //                 <Image
// //                     source={{ uri: `data:image/png;base64,${graph}` }}  // Usar base64 no formato correto
// //                     style={styles.image}
// //                 />

// //             )}

// //             {data.length > 0 && (
// //                 <View style={styles.dataContainer}>
// //                     {data.map((row, index) => (
// //                         <Text key={index}>{JSON.stringify(row)}</Text>
// //                     ))}
// //                 </View>
// //             )}
// //         </ScrollView>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     container: {
// //         padding: 20,
// //     },
// //     input: {
// //         height: 40,
// //         borderColor: 'gray',
// //         borderWidth: 1,
// //         marginBottom: 20,
// //         paddingHorizontal: 10,
// //     },
// //     image: {
// //         width: '100%',
// //         height: 400,
// //         marginTop: 20,
// //         resizeMode: 'contain',
// //     },
// //     error: {
// //         color: 'red',
// //         marginVertical: 10,
// //     },
// //     dataContainer: {
// //         marginTop: 20,
// //     }
// // });

// // export default Perguntas;
// import React, { useState } from 'react';
// import { View, TextInput, Button, Image, StyleSheet, ScrollView, Text } from 'react-native';
// import axios from 'axios';

// const Perguntas = () => {
//     const [question, setQuestion] = useState('');
//     const [graph, setGraph] = useState(null);
//     const [error, setError] = useState('');
//     const [data, setData] = useState([]);

//     const handleQuestionSubmit = async (questionToSubmit) => {
//         try {
//             const response = await axios.post('http://192.168.15.133:5001/process_question', {
//                 question: questionToSubmit
//             });
//             console.log("Resposta do servidor:", response.data);
//             console.log("Enviando pergunta:", questionToSubmit);

//             if (response.data.graph) {
//                 setGraph(response.data.graph);
//             }
//             if (response.data.data) {
//                 setData(response.data.data);
//             }
//             setError('');
//         } catch (error) {
//             console.error("Erro ao enviar a pergunta", error);
//             setError("Erro ao processar a pergunta. Verifique a conexão com o servidor.");
//         }
//     };

//     const predefinedQuestions = [
//         "Qual é o total de vendas por mês deste ano?",
//         "Qual é o total de vendas do ano passado?",
//         "Qual produto teve mais vendas?"
//     ];

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <TextInput
//                 placeholder="Digite sua pergunta..."
//                 value={question}
//                 onChangeText={setQuestion}
//                 style={styles.input}
//             />
//             <Button title="Enviar" onPress={() => handleQuestionSubmit(question)} />
//             {predefinedQuestions.map((q, index) => (
//                 <Button
//                     key={index}
//                     title={q}
//                     onPress={() => handleQuestionSubmit(q)}
//                 />
//             ))}
//             {error ? <Text style={styles.error}>{error}</Text> : null}
//             {graph && (
//                 <Image
//                     source={{ uri: `data:image/png;base64,${graph}` }}
//                     style={styles.image}
//                 />
//             )}
//             {data.length > 0 && (
//                 <View style={styles.dataContainer}>
//                     {data.map((row, index) => (
//                         <Text key={index}>{JSON.stringify(row)}</Text>
//                     ))}
//                 </View>
//             )}
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         padding: 20,
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 20,
//         paddingHorizontal: 10,
//     },
//     image: {
//         width: 300,
//         height: 200,
//         marginTop: 20,
//     },
//     error: {
//         color: 'red',
//         marginVertical: 10,
//     },
//     dataContainer: {
//         marginTop: 20,
//     }
// });

// export default Perguntas;

////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import { View, TextInput, Button, Image, StyleSheet, ScrollView, Text } from 'react-native';
// import axios from 'axios';

// const Perguntas = () => {
//     const [question, setQuestion] = useState('');
//     const [graph, setGraph] = useState(null);
//     const [error, setError] = useState('');
//     const [data, setData] = useState([]);

//     const handleQuestionSubmit = async (questionToSubmit) => {
//         try {
//             console.log("Enviando pergunta:", questionToSubmit);
//             const response = await axios.post('http://192.168.15.133:5001/process_question', {
//                 question: questionToSubmit
//             });
    
//             console.log("Resposta do servidor:", response.data);
    
//             if (response.data.graph) {
//                 setGraph(response.data.graph);
//             } else {
//                 setGraph(null);
//             }
    
//             if (response.data.data) {
//                 setData(response.data.data);
//             } else {
//                 setData([]);
//             }
//             setError('');
//         } catch (error) {
//             // Imprimir mensagem de erro curta
//             console.error("Erro ao enviar a pergunta:", error.message || "Erro desconhecido");
    
//             if (error.response) {
//                 // Se houver uma resposta do servidor
//                 if (error.response.status === 401) {
//                     setError("Erro de autenticação. Verifique suas credenciais.");
//                 } else if (error.response.status === 404) {
//                     setError("Endpoint não encontrado. Verifique a URL.");
//                 } else {
//                     setError(`Erro do servidor: ${error.response.status}`);
//                 }
//             } else {
//                 // Caso não haja resposta do servidor
//                 setError("Erro ao processar a pergunta. Verifique a conexão com o servidor.");
//             }
//         }
//     };
    
    
    

//     const predefinedQuestions = [
//         "Qual é o total de vendas por mês deste ano?",
//         "Qual é o total de vendas do ano passado?",
//         "Qual produto teve mais vendas?"
//     ];

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <TextInput
//                 placeholder="Digite sua pergunta..."
//                 value={question}
//                 onChangeText={setQuestion}
//                 style={styles.input}
//             />
//             <Button title="Enviar" onPress={() => handleQuestionSubmit(question)} />
//             {predefinedQuestions.map((q, index) => (
//                 <Button
//                     key={index}
//                     title={q}
//                     onPress={() => handleQuestionSubmit(q)}
//                 />
//             ))}
//             {error ? <Text style={styles.error}>{error}</Text> : null}
//             {graph && (
//                 <Image
//                      source={{ uri: `data:image/png;base64,${graph}` }}  // Prefixo adicionado
//                     style={{ width: '100%', height: 200 }} // Ajuste a altura conforme necessário
//                  />
//             )}

                


//             {data.length > 0 && (
//                 <View style={styles.dataContainer}>
//                     {data.map((row, index) => {
                      
//                         return <Text key={index}>{JSON.stringify(row)}</Text>;
//                     })}
//                 </View>
//             )}
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         padding: 20,
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 20,
//         paddingHorizontal: 10,
//     },
//     image: {
//         width: 300,
//         height: 200,
//         marginTop: 20,
//     },
//     error: {
//         color: 'red',
//         marginVertical: 10,
//     },
//     dataContainer: {
//         marginTop: 20,
//     },
//         image: {
//             width: '100%', // ou um valor fixo
//             height: 800,   // ajuste a altura conforme necessário
//             resizeMode: 'contain', // para manter a proporção
//         },
//     });
    


// export default Perguntas;

// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, ScrollView, Text, ActivityIndicator } from 'react-native';
// import axios from 'axios';
// import { WebView } from 'react-native-webview';

// const Perguntas = () => {
//     const [question, setQuestion] = useState('');
//     const [graphHtml, setGraphHtml] = useState(null);
//     const [error, setError] = useState('');
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const handleQuestionSubmit = async (questionToSubmit) => {
//         try {
//             setLoading(true);  // Inicia o indicador de carregamento
//             console.log("Enviando pergunta:", questionToSubmit);
//             const response = await axios.post('http://192.168.15.133:5001/process_question', {
//                 question: questionToSubmit
//             });
    
//             console.log("Resposta do servidor:", response.data);
    
//             if (response.data.graph_html) {
//                 setGraphHTML(response.data.graph_html);  // Armazena o HTML do gráfico
//             } else {
//                 setGraphHTML(null);
//             }
    
//             if (response.data.data) {
//                 setData(response.data.data);
//             } else {
//                 setData([]);
//             }
//             setError('');
//         } catch (error) {
//             console.error("Erro ao enviar a pergunta:", error.message || "Erro desconhecido");
    
//             if (error.response) {
//                 if (error.response.status === 401) {
//                     setError("Erro de autenticação. Verifique suas credenciais.");
//                 } else if (error.response.status === 404) {
//                     setError("Endpoint não encontrado. Verifique a URL.");
//                 } else {
//                     setError(`Erro do servidor: ${error.response.status}`);
//                 }
//             } else {
//                 setError("Erro ao processar a pergunta. Verifique a conexão com o servidor.");
//             }
//         } finally {
//             setLoading(false);  // Finaliza o indicador de carregamento
//         }
//     };

//     const predefinedQuestions = [
//         "Qual é o total de vendas por mês deste ano?",
//         "Qual é o total de vendas do ano passado?",
//         "Qual produto teve mais vendas?"
//     ];

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <TextInput
//                 placeholder="Digite sua pergunta..."
//                 value={question}
//                 onChangeText={setQuestion}
//                 style={styles.input}
//             />
//             <Button title="Enviar" onPress={() => handleQuestionSubmit(question)} />
//             {predefinedQuestions.map((q, index) => (
//                 <Button
//                     key={index}
//                     title={q}
//                     onPress={() => handleQuestionSubmit(q)}
//                 />
//             ))}

//             {error ? <Text style={styles.error}>{error}</Text> : null}

//             {loading && <ActivityIndicator size="large" color="#0000ff" />}

//             {graphHtml && (
//                 <View style={styles.webviewContainer}>
//                     <WebView
//                         originWhitelist={['*']}
//                         source={{ html: graphHtml }}
//                         style={styles.webview}
//                         javaScriptEnabled={true}
//                         domStorageEnabled={true}
//                     />
//                 </View>
//             )}

//             {data.length > 0 && (
//                 <View style={styles.dataContainer}>
//                     {data.map((row, index) => (
//                         <Text key={index}>{JSON.stringify(row)}</Text>
//                     ))}
//                 </View>
//             )}
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         padding: 20,
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 20,
//         paddingHorizontal: 10,
//     },
//     error: {
//         color: 'red',
//         marginVertical: 10,
//     },
//     dataContainer: {
//         marginTop: 20,
//     },
//     webviewContainer: {
//         height: 400,
//         marginTop: 20,
//     },
//     webview: {
//         flex: 1,
//     },
// });

// export default Perguntas;

// import React, { useState } from 'react';
// import { WebView } from 'react-native-webview';
// import { View, TextInput, Button, StyleSheet, ScrollView, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
// import axios from 'axios';
// import { LinearGradient } from 'expo-linear-gradient'; // Importando o LinearGradient
// import { Audio } from 'expo-av'

// const Perguntas = () => {
//     const [question, setQuestion] = useState('');
//     const [graphHtml, setGraphHtml] = useState(null);
//     const [error, setError] = useState('');
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const handleQuestionSubmit = async (questionToSubmit) => {
//         try {
//             setLoading(true);
//             console.log("Enviando pergunta:", questionToSubmit);
//             const response = await axios.post('http://192.168.15.133:5001/process_question', {
//                 question: questionToSubmit
//             });

//             console.log("Resposta do servidor:", response.data);

//             if (response.data.graph_html) {
//                 setGraphHtml(response.data.graph_html);
//             } else {
//                 setGraphHtml(null);
//             }

//             if (response.data.data) {
//                 setData(response.data.data);
//             } else {
//                 setData([]);
//             }
//             setError('');
//         } catch (error) {
//             console.error("Erro ao enviar a pergunta:", error.message || "Erro desconhecido");

//             if (error.response) {
//                 if (error.response.status === 401) {
//                     setError("Erro de autenticação. Verifique suas credenciais.");
//                 } else if (error.response.status === 404) {
//                     setError("Endpoint não encontrado. Verifique a URL.");
//                 } else {
//                     setError(`Erro do servidor: ${error.response.status}`);
//                 }
//             } else {
//                 setError("Erro ao processar a pergunta. Verifique a conexão com o servidor.");
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     const predefinedQuestions = [
//         "Qual é o total de vendas por mês deste ano?",
//         "Qual é o total de vendas do ano passado?",
//         "Qual produto teve mais vendas?"
//     ];

//     return (
//         <LinearGradient
//             colors={['#000000', '#FF0000']} // Degradê de preto para vermelho
//             style={styles.container}
//         >
//             <ScrollView contentContainerStyle={styles.scrollContainer}>
//                 <TextInput
//                     placeholder="Digite sua pergunta..."
//                     value={question}
//                     onChangeText={setQuestion}
//                     style={styles.input}
                
//                 />
//                 <TouchableOpacity style={styles.button} onPress={() => handleQuestionSubmit(question)}>
//                     <Text style={styles.buttonText}>Enviar</Text>
//                 </TouchableOpacity>

//                 {predefinedQuestions.map((q, index) => (
//                     <TouchableOpacity
//                         key={index}
//                         style={styles.button}
//                         onPress={() => handleQuestionSubmit(q)}
//                     >
//                         <Text style={styles.buttonText}>{q}</Text>
//                     </TouchableOpacity>
//                 ))}

//                 {error ? <Text style={styles.error}>{error}</Text> : null}

//                 {loading && <ActivityIndicator size="large" color="#FFFFFF" />}
//                 {graphHtml && (
//                     <View style={styles.webviewContainer}>
//                         <WebView
//                             originWhitelist={['*']}
//                             source={{ html: graphHtml }}
//                             style={styles.webview}
//                             javaScriptEnabled={true}
//                             domStorageEnabled={true}
//                         />
//                     </View>
//                 )}

//                 {data.length > 0 && (
//                     <View style={styles.dataContainer}>
//                         {data.map((row, index) => (
//                             <Text key={index}>{JSON.stringify(row)}</Text>
//                         ))}
//                     </View>
//                 )}
//             </ScrollView>
//         </LinearGradient>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     scrollContainer: {
//         padding: 20,
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 20,
//         paddingHorizontal: 10,
//         borderRadius: 5,
//         backgroundColor: '#fff', // Fundo branco para o campo de input
//     },
//     error: {
//         color: 'red',
//         marginVertical: 10,
//     },
//     dataContainer: {
//         marginTop: 20,
//     },
//     webviewContainer: {
//         height: 400,
//         marginTop: 20,
//     },
//     webview: {
//         flex: 1,
//     },
//     button: {
//         backgroundColor: 'rgb(92, 92, 92)', // Cor de fundo dos botões
//         paddingVertical: 12,
//         paddingHorizontal: 24,
//         borderRadius: 8,
//         marginVertical: 10,
//         alignItems: 'center',
//         width: '100%', // Largura dos botões
//     },
//     buttonText: {
//         color: '#FFFFFF', // Cor do texto dos botões
//         fontSize: 16,
//         textAlign: 'center',
//     },
// });

// export default Perguntas;



//AQUI FUNIONA MAS N PERGUNTA

// import React, { useState, useEffect } from 'react';
// import { WebView } from 'react-native-webview';
// import { View, TextInput, Button, StyleSheet, ScrollView, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
// import axios from 'axios';
// import { LinearGradient } from 'expo-linear-gradient'; 
// import { Audio } from 'expo-av';

// const Perguntas = () => {
//     const [question, setQuestion] = useState('');
//     const [graphHtml, setGraphHtml] = useState(null);
//     const [error, setError] = useState('');
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [recording, setRecording] = useState(null); // Estado para gravação de áudio

//     // Configuração do modo de áudio
//     useEffect(() => {
//         const setAudioMode = async () => {
//             try {
//                 await Audio.setAudioModeAsync({
//                     allowsRecordingIOS: true,
//                     playsInSilentModeIOS: true,
//                     staysActiveInBackground: true,
//                 });
//             } catch (error) {
//                 console.error("Erro ao configurar o modo de áudio:", error);
//             }
//         };

//         setAudioMode();
//     }, []);

//     const handleQuestionSubmit = async (questionToSubmit) => {
//         try {
//             setLoading(true);
//             console.log("Enviando pergunta:", questionToSubmit);
//             const response = await axios.post('http://192.168.15.133:5001/process_question', {
//                 question: questionToSubmit
//             });

//             console.log("Resposta do servidor:", response.data);

//             if (response.data.graph_html) {
//                 setGraphHtml(response.data.graph_html);
//             } else {
//                 setGraphHtml(null);
//             }

//             if (response.data.data) {
//                 setData(response.data.data);
//             } else {
//                 setData([]);
//             }
//             setError('');
//         } catch (error) {
//             console.error("Erro ao enviar a pergunta:", error.message || "Erro desconhecido");

//             if (error.response) {
//                 if (error.response.status === 401) {
//                     setError("Erro de autenticação. Verifique suas credenciais.");
//                 } else if (error.response.status === 404) {
//                     setError("Endpoint não encontrado. Verifique a URL.");
//                 } else {
//                     setError(`Erro do servidor: ${error.response.status}`);
//                 }
//             } else {
//                 setError("Erro ao processar a pergunta. Verifique a conexão com o servidor.");
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     const startRecording = async () => {
//         try {
//             const recordingOptions = {
//                 // Definindo opções de gravação específicas para iOS
//                 android: {
//                     extension: '.mp4',
//                     outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
//                     audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
//                     sampleRate: 16000,
//                     numberOfChannels: 1,
//                 },
//                 ios: {
//                     extension: '.m4a',
//                     outputFormat: Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC,
//                     audioEncoder: Audio.RECORDING_OPTION_IOS_AUDIO_ENCODER_AAC,
//                     sampleRate: 16000,
//                     numberOfChannels: 1,
//                 },
//             };

//             const { recording } = await Audio.Recording.createAsync(recordingOptions);
//             setRecording(recording);
//             console.log('Gravação iniciada');
//         } catch (error) {
//             console.error("Erro ao iniciar a gravação:", error);
//         }
//     };

//     const stopRecording = async () => {
//         if (recording) {
//             try {
//                 await recording.stopAndUnloadAsync();
//                 const uri = recording.getURI();
//                 console.log('Gravação parada e salva em', uri);
//                 await transcribeAudio(uri); // Transcreve o áudio gravado
//                 setRecording(null); // Reseta o estado de gravação
//             } catch (error) {
//                 console.error("Erro ao parar a gravação:", error);
//             }
//         }
//     };

//     const base64Audio = async (uri) => {
//         const response = await fetch(uri);
//         const blob = await response.blob();
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.onloadend = () => resolve(reader.result.split(',')[1]); // Retorna apenas a parte Base64
//             reader.onerror = reject;
//             reader.readAsDataURL(blob);
//         });
//     };

//     const transcribeAudio = async (uri) => {
//         const apiKey = 'AIzaSyBnWCphXpIM6K92p8ADvnYuMJy2448H4dc'; // Substitua pela sua chave da API
//         const url = `https://speech.googleapis.com/v1/speech:recognize?key=${apiKey}`;

//         try {
//             const base64Content = await base64Audio(uri);

//             const body = {
//                 config: {
//                     encoding: 'LINEAR16', // Ajustado para o formato correto
//                     sampleRateHertz: 16000,
//                     languageCode: 'pt-BR',
//                 },
//                 audio: {
//                     content: base64Content, // O conteúdo deve ser Base64
//                 },
//             };

//             const response = await axios.post(url, body, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//             // Verifique se 'results' existe antes de tentar mapear
//             const transcription = response.data.results
//                 ? response.data.results
//                     .map(result => result.alternatives[0].transcript)
//                     .join('\n')
//                 : "Nenhuma transcrição disponível"; // Caso não haja resultados

//             console.log("Transcrição do áudio:", transcription);
//             handleQuestionSubmit(transcription); // Envia a transcrição como pergunta
//         } catch (error) {
//             console.error("Erro ao transcrever o áudio:", error);
//             setError("Erro ao transcrever o áudio.");
//         }
//     };

//     const predefinedQuestions = [
//         "Qual é o total de vendas por mês deste ano?",
//         "Qual é o total de vendas do ano passado?",
//         "Qual produto teve mais vendas?"
//     ];

//     return (
//         <LinearGradient
//             colors={['#000000', '#FF0000']} // Degradê de preto para vermelho
//             style={styles.container}
//         >
//             <ScrollView contentContainerStyle={styles.scrollContainer}>
//                 <TextInput
//                     placeholder="Digite sua pergunta..."
//                     value={question}
//                     onChangeText={setQuestion}
//                     style={styles.input}
//                 />
//                 <TouchableOpacity style={styles.button} onPress={() => handleQuestionSubmit(question)}>
//                     <Text style={styles.buttonText}>Enviar</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.button} onPress={startRecording}>
//                     <Text style={styles.buttonText}>Iniciar Gravação</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.button} onPress={stopRecording}>
//                     <Text style={styles.buttonText}>Parar Gravação</Text>
//                 </TouchableOpacity>

//                 {predefinedQuestions.map((q, index) => (
//                     <TouchableOpacity
//                         key={index}
//                         style={styles.button}
//                         onPress={() => handleQuestionSubmit(q)}
//                     >
//                         <Text style={styles.buttonText}>{q}</Text>
//                     </TouchableOpacity>
//                 ))}

//                 {error ? <Text style={styles.error}>{error}</Text> : null}

//                 {loading && <ActivityIndicator size="large" color="#FFFFFF" />}
//                 {graphHtml && (
//                     <View style={styles.webviewContainer}>
//                         <WebView
//                             originWhitelist={['*']}
//                             source={{ html: graphHtml }}
//                             style={styles.webview}
//                             javaScriptEnabled={true}
//                             domStorageEnabled={true}
//                         />
//                     </View>
//                 )}

//                 {data.length > 0 && (
//                     <View style={styles.dataContainer}>
//                         {data.map((row, index) => (
//                             <Text key={index}>{JSON.stringify(row)}</Text>
//                         ))}
//                     </View>
//                 )}
//             </ScrollView>
//         </LinearGradient>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     scrollContainer: {
//         padding: 20,
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 20,
//         paddingHorizontal: 10,
//         borderRadius: 5,
//         backgroundColor: '#fff', // Fundo branco para o campo de input
//     },
//     error: {
//         color: 'red',
//         marginVertical: 10,
//     },
//     dataContainer: {
//         marginTop: 20,
//     },
//     webviewContainer: {
//         height: 400,
//         marginTop: 20,
//     },
//     webview: {
//         flex: 1,
//     },
//     button: {
//         backgroundColor: 'rgb(92, 92, 92)', // Cor de fundo dos botões
//         paddingVertical: 12,
//         paddingHorizontal: 24,
//         borderRadius: 8,
//         marginVertical: 10,
//         alignItems: 'center',
//         width: '100%', // Largura dos botões
//     },
//     buttonText: {
//         color: '#FFFFFF', // Cor do texto dos botões
//         fontSize: 16,
//     },
// });

// export default Perguntas;

import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { View, TextInput, Button, StyleSheet, ScrollView, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient'; 
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/Ionicons'; 

const Perguntas = () => {
    const [question, setQuestion] = useState('');
    const [graphHtml, setGraphHtml] = useState(null);
    const [error, setError] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [recording, setRecording] = useState(null); 
    const [showPredefinedQuestions, setShowPredefinedQuestions] = useState(false); // Adicionado estado para controlar a visibilidade

    useEffect(() => {
        const setAudioMode = async () => {
            try {
                await Audio.setAudioModeAsync({
                    allowsRecordingIOS: true,
                    playsInSilentModeIOS: true,
                    staysActiveInBackground: true,
                });
            } catch (error) {
                console.error("Erro ao configurar o modo de áudio:", error);
            }
        };

        setAudioMode();
    }, []);

    const handleQuestionSubmit = async (questionToSubmit) => {
        if (questionToSubmit && !questionToSubmit.trim().endsWith('?')) {
            questionToSubmit += '?';
        }
        try {
            setLoading(true);
            console.log("Enviando pergunta:", questionToSubmit);
            const response = await axios.post('http://192.168.15.133:5001/process_question', {
                question: questionToSubmit
            });

            console.log("Resposta do servidor:", response.data);

            if (response.data.graph_html) {
                setGraphHtml(response.data.graph_html);
            } else {
                setGraphHtml(null);
            }

            if (response.data.data) {
                setData(response.data.data);
            } else {
                setData([]);
            }
            setError('');
        } catch (error) {
            console.error('Erro ao enviar a pergunta:', error.response ? error.response.data : error.message);

            if (error.response) {
                if (error.response.status === 401) {
                    setError("Erro de autenticação. Verifique suas credenciais.");
                } else if (error.response.status === 404) {
                    setError("Endpoint não encontrado. Verifique a URL.");
                } else {
                    setError(`Erro do servidor: ${error.response.status}`);
                }
            } else {
                setError("Erro ao processar a pergunta. Verifique a conexão com o servidor.");
            }
        } finally {
            setLoading(false);
        }
    };

    const startRecording = async () => {
        try {
            const recordingOptions = {
                android: {
                    extension: '.mp4',
                    outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
                    audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
                    sampleRate: 16000,
                    numberOfChannels: 1,
                },
                ios: {
                    extension: '.m4a',
                    outputFormat: Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC,
                    audioEncoder: Audio.RECORDING_OPTION_IOS_AUDIO_ENCODER_AAC,
                    sampleRate: 16000,
                    numberOfChannels: 1,
                },
            };

            const { recording } = await Audio.Recording.createAsync(recordingOptions);
            setRecording(recording);
            console.log('Gravação iniciada');
        } catch (error) {
            console.error("Erro ao iniciar a gravação:", error);
        }
    };

    const stopRecording = async () => {
        if (recording) {
            try {
                await recording.stopAndUnloadAsync();
                const uri = recording.getURI();
                console.log('Gravação parada e salva em', uri);
                await transcribeAudio(uri); 
                setRecording(null); 
            } catch (error) {
                console.error("Erro ao parar a gravação:", error);
            }
        }
    };

    const base64Audio = async (uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(',')[1]); 
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    };

    const transcribeAudio = async (uri) => {
        const apiKey = 'AIzaSyBnWCphXpIM6K92p8ADvnYuMJy2448H4dc'; 
        const url = `https://speech.googleapis.com/v1/speech:recognize?key=${apiKey}`;

        try {
            const base64Content = await base64Audio(uri);

            const body = {
                config: {
                    encoding: 'LINEAR16', 
                    sampleRateHertz: 16000,
                    languageCode: 'pt-BR',
                },
                audio: {
                    content: base64Content, 
                },
            };

            const response = await axios.post(url, body, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const transcription = response.data.results
                ? response.data.results
                    .map(result => result.alternatives[0].transcript)
                    .join('\n')
                : "Nenhuma transcrição disponível";

            console.log("Transcrição do áudio:", transcription);
            handleQuestionSubmit(transcription); 
        } catch (error) {
            console.error("Erro ao transcrever o áudio:", error);
            setError("Erro ao transcrever o áudio.");
        }
    };

    const predefinedQuestions = [
        "Qual é o total de vendas por mês deste ano?",
        "Qual é a quantidade total de produtos em estoque por tipo?",
        "Qual produto teve mais vendas?"
    ];

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Bem-vindo de volta!{'\n'}Como posso te ajudar?</Text>
                </View>
    
                <View style={styles.inputBackground}>
                    <TextInput
                        placeholder="Digite sua pergunta..."
                        value={question}
                        onChangeText={setQuestion}
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.iconButton} onPress={startRecording}>
                        <Icon name="mic" size={30} color="#FFFFFF" /> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton} onPress={stopRecording}>
                        <Icon name="square" size={30} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
    
                <TouchableOpacity style={styles.button} onPress={() => handleQuestionSubmit(question)}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>

                {/* Botão para mostrar/esconder perguntas */}
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => setShowPredefinedQuestions(!showPredefinedQuestions)} // Alterna o estado
                >
                    <Text style={styles.buttonText}>
                        {showPredefinedQuestions ? 'Histórico de perguntas' : 'Mostrar Histórico de perguntas'}
                    </Text>
                </TouchableOpacity>

                {showPredefinedQuestions && predefinedQuestions.map((q, index) => (
                     <TouchableOpacity
                     style={styles.perguntas}
                     key={index}
                     onPress={() => handleQuestionSubmit(q)}
                 >
                     <View style={styles.questionContainer}>
                         <Icon name="time" size={20} color="#FFFFFF" style={styles.questionIcon} />
                         <Text style={styles.perguntaText}>{q}</Text>
                     </View>
                 </TouchableOpacity>
             ))}
    
                {error ? <Text style={styles.error}>{error}</Text> : null}
    
                {loading && <ActivityIndicator size="large" color="#FFFFFF" />}
                {graphHtml && (
                    <View style={styles.webviewContainer}>
                        <WebView
                            originWhitelist={['*']}
                            source={{ html: graphHtml }}
                            style={styles.webview}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                        />
                    </View>
                )}
    
                {data.length > 0 && (
                    <View style={styles.dataContainer}>
                        {data.map((row, index) => (
                            <Text key={index}>{JSON.stringify(row)}</Text>
                        ))}
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
     
    },
    headerContainer: {
        backgroundColor: '#FF0017', // Fundo vermelho para o cabeçalho
        padding: 20,
    },
    header: {
        fontFamily:'Inter',
        fontSize: 20,
        color: '#FFFFFF', // Cor do texto do cabeçalho
    },
    inputBackground: {
        flexDirection: 'row', // Para alinhar os itens na horizontal
        alignItems: 'center', // Centraliza verticalmente
        backgroundColor: '#FF0017', // Fundo vermelho
        padding: 10, // Espaçamento interno
        borderRadius: 5, // Bordas arredondadas
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
    },
    iconButton: {
        marginLeft: 10,
        backgroundColor: '#FF0017', // Fundo vermelho para os botões de ícone
        borderRadius: 5,
        padding: 10,
    },
    button: {
        backgroundColor: '#FF0017', // Fundo vermelho
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
    },
    buttonText: {
        color: '#FFFFFF', // Cor do texto do botão
        textAlign: 'center',
    },
    error: {
        color: 'red',
        textAlign: 'center',
    },
    webviewContainer: {
        marginTop: 20,
    },
    webview: {
        height: 400,
    },
    dataContainer: {
        marginTop: 20,
    },
    perguntas: {
        backgroundColor: 'rgba(92,92,92,0.4)', // Cor de fundo
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        flexDirection: 'row', // Para alinhar o ícone e o texto
        alignItems: 'center', // Centralizar verticalmente
    },
    questionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    questionIcon: {
        marginRight: 10, // Espaço entre o ícone e o texto
    },
    perguntaText: {
        color: '#000000', // Cor do texto
        fontFamily: 'Inter',
    },
});

export default Perguntas;
