// import axios from 'axios';

// const vannaApi = async () => {
//     try {
//         const response = await axios.get('https://83ei40n3iyo-496ff2e9c6d22116-8084-colab.googleusercontent.com/');
//         return response.data;
//     } catch (error) {
//         console.error('Erro ao obter os top 10 álbuns:', error);
//         return [];
//     }
// };

// export default vannaApi;
import axios from 'axios';

const VannaApi = async () => {
    try {
        const response = await axios.get('https://83ei40n3iyo-496ff2e9c6d22116-8084-colab.googleusercontent.com/');
        return response.data; // Supondo que a API retorna um array de objetos com os dados dos top 10 álbuns
    } catch (error) {
        throw new Error('Erro ao obter os top 10 álbuns:', error);
    }
};

export default VannaApi;
