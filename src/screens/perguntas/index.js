import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const Perguntas = () => {
    const [question, setQuestion] = useState('');
    const [graph, setGraph] = useState(null);

    const handleQuestionSubmit = async (questionToSubmit) => {
        try {
            const response = await axios.post('http://192.168.15.133:5001/process_question', {
                question: questionToSubmit
            });
            console.log("Resposta do servidor:", response.data);
            console.log("Enviando pergunta:", questionToSubmit);

            if (response.data.graph) {
                setGraph(response.data.graph);
            }
        } catch (error) {
            console.error("Erro ao enviar a pergunta", error);
        }
    };

    const predefinedQuestions = [
        "Qual é o total de vendas por mês deste ano?",
        "Qual é o total de vendas do ano passado?",
        "Qual produto teve mais vendas?"
    ];

    return (
        <View style={styles.container}>
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
            {graph && (
                <Image
                    source={{ uri: `data:image/png;base64,${graph}` }}
                    style={styles.image}
                />
                
            )}
                
        </View>
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
    },
    image: {
        width: 300,
        height: 200,
        marginTop: 20,
    },
});

export default Perguntas;
