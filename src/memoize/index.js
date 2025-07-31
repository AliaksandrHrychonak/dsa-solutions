/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = new Map();

  return function(...args) {
    // Создаем ключ на основе аргументов
    const key = JSON.stringify(args);

    // Проверяем, есть ли результат в кэше
    if (cache.has(key)) {
      return cache.get(key);
    }

    // Вычисляем результат функции
    const result = fn(...args);

    // Сохраняем результат в кэш
    cache.set(key, result);

    // Возвращаем результат
    return result;
  };
}


/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */