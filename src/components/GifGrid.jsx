import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
import { logger } from '../helpers/logger';

export const GifGrid = ({ category }) => {
  logger(`🖼️ [GifGrid] - Renderizando para categoría: "${category}"`);
  const { gifs, isLoading } = useFetchGifs(category);
  logger(`⏳ [GifGrid] - Para "${category}": isLoading: ${isLoading}, Gifs: ${gifs.length}`);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {gifs.map((gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};