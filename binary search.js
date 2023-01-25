// Функция бинарного поиска, получает отсортированный массив и значение.
// Если значение присутствует возвращает его индекс если нет возвращает null.

function binarySearch(sortArray, searchItem) {
  let low = 0; // Индекс элемента с которого начинается часть массива в которой ведется поиск
  let hight = sortArray.length - 1; // Индекс элемента на котором заканчивается часть массива в которой ведется поиск

  while (low <= hight) {
    // Цикл будет повторяться пока часть массива не дойдет до 1 элемента
    let mid = Math.floor((low + hight) / 2); // Индекс середины части массива (округляется в меньшую сторону)
    let guess = sortArray[mid]; // Предпологаемый элемент

    // Сравнение предпологаемого и заданного значения
    if (guess === searchItem) {
      return mid; // Если они равны возвращается индекс заданного значения
    } else if (guess > searchItem) {
      hight = mid - 1; // Если предпологаемое значение больше заданного значит концом части массива становиться левый от середины индекс
    } else {
      low = mid + 1; // Если предпологаемое значение меньше значит началом части массива становиться правый от середины индекс
    }
  }
  return null; // если элемент не найден возвращается null
}

// Скорость алгоритма логорифмическая O(log n)
