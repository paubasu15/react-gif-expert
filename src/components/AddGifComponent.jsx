import { useState } from 'react';
import { logger } from '../helpers/logger';

export const AddGifComponent = ({ onNewCategory }) => {
  logger('📝 [AddGifComponent] - Renderizando.');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    logger('⌨️ [AddGifComponent] - Input cambió:', e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = inputValue.trim();
    logger('✅ [AddGifComponent] - Formulario enviado con:', newCategory);
    
    if (newCategory.length <= 1) {
      logger('❌ [AddGifComponent] - Envío ignorado, input muy corto.');
      return;
    }
    
    onNewCategory(newCategory);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Buscar gifs..."
      />
    </form>
  );
};