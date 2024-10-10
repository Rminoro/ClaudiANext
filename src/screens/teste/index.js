import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import vannaApi from '../../api/vanna/api';

const Teste = () => {
    const [topAlbums, setTopAlbums] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const albums = await vannaApi();
                setTopAlbums(albums);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <View>
            {error ? (
                <Text>Erro: {error}</Text>
            ) : (
                <View>
                    <Text>Top 10 Álbuns por Vendas:</Text>
                    {topAlbums.map(album => (
                        <Text key={album.AlbumId}>{album.Title}</Text>
                    ))}
                </View>
            )}
        </View>
    );
};

export default Teste;
