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
import { View, Text, Button, TextInput, ActivityIndicator } from 'react-native';
import OpenAI from 'openai';

const TelaInsights = () => {
  const [insights, setInsights] = useState(''); // Estado para armazenar os insights
  const [pergunta, setPergunta] = useState(''); // Estado para armazenar a pergunta do usuário
  const [loading, setLoading] = useState(false); // Estado para o carregamento

  const openai = new OpenAI({
    apiKey: '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',
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text>Digite sua pergunta:</Text>

      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 10,
          width: '100%',
        }}
        placeholder="Ex: Quais insights posso obter?"
        value={pergunta}
        onChangeText={setPergunta} // Atualiza o estado com a pergunta do usuário
      />

      <Button title="Gerar Insights" onPress={gerarInsights} />

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      
      {insights ? (
        <View style={{ marginTop: 20 }}>
          <Text>Insights:</Text>
          <Text>{insights}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default TelaInsights;
