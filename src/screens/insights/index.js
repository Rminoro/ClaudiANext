// import React, { useState } from 'react';
// import { View, Text, Button, TextInput, ActivityIndicator } from 'react-native';
// import OpenAI from 'openai';

// const TelaInsights = () => {
//   const [insights, setInsights] = useState(''); // Estado para armazenar os insights
//   const [pergunta, setPergunta] = useState(''); // Estado para armazenar a pergunta do usuário
//   const [loading, setLoading] = useState(false); // Estado para o carregamento

//   const openai = new OpenAI({
//     apiKey: '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',
//   });

//   const gerarInsights = async () => {
//     setLoading(true); // Mostrar indicador de carregamento
//     try {
//       const completion = await openai.chat.completions.create({
//         model: 'gpt-3.5-turbo', // Ou o modelo que você preferir
//         messages: [
//           { role: 'system', content: 'Você é um assistente útil.' },
//           {
//             role: 'user',
//             content: `${pergunta} Os dados do gráfico são: [150, 200, 170, 250, 220, 300].`,
//           },
//         ],
//       });

//       const textoInsight = completion.choices[0].message.content;
//       setInsights(textoInsight); // Define os insights no estado
//     } catch (error) {
//       console.error('Erro ao gerar insights:', error.message);
//     } finally {
//       setLoading(false); // Esconder o indicador de carregamento
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
//       <Text>Digite sua pergunta:</Text>

//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1,
//           marginBottom: 20,
//           paddingHorizontal: 10,
//           width: '100%',
//         }}
//         placeholder="Ex: Quais insights posso obter desses dados?"
//         value={pergunta}
//         onChangeText={setPergunta} // Atualiza o estado com a pergunta do usuário
//       />

//       <Button title="Gerar Insights" onPress={gerarInsights} />

//       {loading && <ActivityIndicator size="large" color="#0000ff" />}
      
//       {insights ? (
//         <View style={{ marginTop: 20 }}>
//           <Text>Insights:</Text>
//           <Text>{insights}</Text>
//         </View>
//       ) : null}
//     </View>
//   );
// };

// export default TelaInsights;
import React, { useState } from 'react';
import { View, Text, TextInput, ActivityIndicator, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import OpenAI from 'openai';

const TelaInsights = () => {
  const [insights, setInsights] = useState(''); // Estado para armazenar os insights
  const [pergunta, setPergunta] = useState(''); // Estado para armazenar a pergunta do usuário
  const [loading, setLoading] = useState(false); // Estado para o carregamento

  const openai = new OpenAI({
    apiKey: '',
  });

  const gerarInsights = async () => {
    setLoading(true); // Mostrar indicador de carregamento
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo', // Ou o modelo que você preferir
        messages: [
          { role: 'system', content: 'Você é um assistente útil.' },
          {
            role: 'user',
            content: pergunta, // Apenas a pergunta do usuário
          },
        ],
      });

      const textoInsight = completion.choices[0].message.content;
      setInsights(textoInsight); // Define os insights no estado
    } catch (error) {
      console.error('Erro ao gerar insights:', error.message);
    } finally {
      setLoading(false); // Esconder o indicador de carregamento
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Digite aqui sua ideia/dúvida:</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Sobre qual assunto gostaria de perguntar?"
        value={pergunta}
        onChangeText={setPergunta}
      />

      <TouchableOpacity style={styles.button} onPress={gerarInsights} disabled={loading}>
        <Text style={styles.buttonText}>Gerar Insights</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      <ScrollView style={styles.scrollContainer}>
        {insights ? (
          <View style={styles.insightsContainer}>
            <Text style={styles.insightsTitle}>Claud.Ia:</Text>
            <Text style={styles.insightsText}>{insights}</Text>
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Fundo branco para o restante da página
  },
  header: {
    width: '100%',
    backgroundColor: '#FF0017', // Fundo vermelho
    padding: 20,
    alignItems: 'flex-start',
    height: 150,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: 20,
    paddingTop:50,
    
    
  },
  headerText: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Inter',
  },
  input: {
    height: 40,
    borderColor: '#FF0017',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#FF0017', // Fundo vermelho do botão
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff', // Texto do botão em branco
    fontSize: 16,
    fontFamily: 'Inter',
  },
  scrollContainer: {
    flex: 1, // Permite que o ScrollView preencha o espaço restante
    marginTop: 10,
  },
  insightsContainer: {
    marginTop: 20,
    backgroundColor: '#f8f8f8', // Fundo claro para os insights
    padding: 15,
    borderRadius: 8,
    width: '100%',
  },
  insightsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  insightsText: {
    marginTop: 10,
    color: '#333',
    fontSize: 19,
  },
});

export default TelaInsights;
