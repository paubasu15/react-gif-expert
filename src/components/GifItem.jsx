import { logger } from '../helpers/logger';

export const GifItem = ({ title, url }) => {
  logger(`✨ [GifItem] - Renderizando card: "${title}"`);
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};