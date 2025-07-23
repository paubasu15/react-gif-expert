import { logger } from './logger';

export const getGifs = async (category) => {
  logger(`🌐 [getGifs] - Pidiendo datos a la API de GIPHY para: "${category}"`);
  const apiKey = 'P7e4w2MllcdJUAzwfvKHuOZb85B74Ezs';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=12`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));

  logger(`👍 [getGifs] - Se encontraron y mapearon ${gifs.length} gifs.`);
  return gifs;
};