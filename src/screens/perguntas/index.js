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

import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import { View, TextInput, Button, StyleSheet, ScrollView, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';


const Perguntas = () => {
    const [question, setQuestion] = useState('');
    const [graphHtml, setGraphHtml] = useState(null);  // Corrigido: 'setGraphHtml' em vez de 'setGraphHTML'
    const [error, setError] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleQuestionSubmit = async (questionToSubmit) => {
        try {
            setLoading(true);  // Inicia o indicador de carregamento
            console.log("Enviando pergunta:", questionToSubmit);
            const response = await axios.post('http://192.168.15.133:5001/process_question', {
                question: questionToSubmit
            });
    
            console.log("Resposta do servidor:", response.data);
    
            if (response.data.graph_html) {
                setGraphHtml(response.data.graph_html);  // Corrigido: 'setGraphHtml' para armazenar o HTML do gráfico
            } else {
                setGraphHtml(null);  // Corrigido para garantir que, caso não haja gráfico, o valor seja resetado
            }
    
            if (response.data.data) {
                setData(response.data.data);
            } else {
                setData([]);
            }
            setError('');
        } catch (error) {
            console.error("Erro ao enviar a pergunta:", error.message || "Erro desconhecido");
    
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
            setLoading(false);  // Finaliza o indicador de carregamento
        }
    };

    const predefinedQuestions = [
        "Qual é o total de vendas por mês deste ano?",
        "Qual é o total de vendas do ano passado?",
        "Qual produto teve mais vendas?"
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TextInput
                placeholder="Digite sua pergunta..."
                value={question}
                onChangeText={setQuestion}
                style={styles.input}
            />
            <Button title="Enviar" onPress={() => handleQuestionSubmit(question)} />
            {predefinedQuestions.map((q, index) => (
                <Button
                    key={index}
                    title={q}
                    onPress={() => handleQuestionSubmit(q)}
                />
            ))}

            {error ? <Text style={styles.error}>{error}</Text> : null}

            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            {graphHtml && (
                    <View style={styles.webviewContainer}>
                        <WebView
                            originWhitelist={['*']}
                            source={{ html: graphHtml }}  // Use a chave 'graph_html'
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
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    error: {
        color: 'red',
        marginVertical: 10,
    },
    dataContainer: {
        marginTop: 20,
    },
    webviewContainer: {
        height: 400,
        marginTop: 20,
    },
    webview: {
        flex: 1,
    },
});

export default Perguntas;

