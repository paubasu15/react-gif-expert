import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { logger } from '../helpers/logger';

export const useFetchGifs = (category) => {
  logger(`훅 [useFetchGifs] - Hook inicializado para: "${category}"`);
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    logger(`🔄 [useFetchGifs] useEffect - Disparado para: "${category}"`);

    const fetchGifs = async () => {
      logger(`📡 [useFetchGifs] useEffect - Empezando fetch para: "${category}"`);
      const newGifs = await getGifs(category);
      setGifs(newGifs);
      setIsLoading(false);
      logger(`✅ [useFetchGifs] useEffect - Fetch completo. Gifs recibidos para: "${category}"`);
    };

    fetchGifs();
  }, [category]);

  logger(`📤 [useFetchGifs] - Devolviendo estado para: "${category}"`, { isLoading, gifsCount: gifs.length });
  return {
    gifs,
    isLoading,
  };
};