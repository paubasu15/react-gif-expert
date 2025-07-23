import { useState } from 'react';
import { AddGifComponent, GifGrid } from './components';
import { logger } from './helpers/logger';

export const GifExpertApp = () => {
  logger('⚛️ [GifExpertApp] - Renderizando componente principal.');
  const [categories, setCategories] = useState(['Halo']);

  const onAddCategory = (newCategory) => {
    logger('➕ [GifExpertApp] - onAddCategory llamado con:', newCategory);
    if (categories.some((cat) => cat.toLowerCase() === newCategory.toLowerCase())) {
      logger('⚠️ [GifExpertApp] - Categoría duplicada, se ignora.');
      return;
    }
    logger('🔄 [GifExpertApp] - Actualizando estado de categorías...');
    setCategories([newCategory, ...categories]);
  };

  logger('📊 [GifExpertApp] - Estado actual de categorías:', categories);
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddGifComponent onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;