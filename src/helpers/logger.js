/**
 * Un logger que solo imprime mensajes en la consola en modo de desarrollo.
 * Acepta cualquier número de argumentos, igual que console.log.
 * @param  {...any} args - Los mensajes o valores a imprimir.
 */
export const logger = (...args) => {
  // Esta condición verifica que NO estemos en producción
  if (import.meta.env.MODE === 'development') {
    console.log(...args);
  }
};
