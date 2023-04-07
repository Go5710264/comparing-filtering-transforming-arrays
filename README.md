### Сравнение массивов

Функция `compareArrays(arr1, arr2)` с помощью функции высшего порядка сравнивает значения двух массивов.
Если массивы имеют одинаковые значения на одинаковых индексах, `compareArrays` выдаёт `true` (иначе `false`). Используется метод `every` для сравнения элементов одного массива с соответствующими элементами другого массива.

#### Например:

```javascript
compareArrays([8, 9], [6]) // false, разные значения
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]) // false, разные значения
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]) // false, разные значения
compareArrays([1, 2, 3], [2, 3, 1]) // false, разные индексы, хотя и одинаковые значения
compareArrays([8, 1, 2], [8, 1, 2]) // true
```

___

### Фильтрация и преобразование массива

Функция `advancedFilter(arr)`, отбирает из массива чисел только положительные числа, кратные 3 и возвращает новый массив с отобранными числами, умноженными на 10. Для этого к исходному массиву применяется метод `filter`.
_Описание кода_: сначала отобраны только положительные числа, затем только кратные 3. Потом используется метод `map`, который умножает полученные значения на 10.

#### Например:

```javascript
advancedFilter([-1,6,-9,3]); // [60,30]
advancedFilter([-10,-21,12,123]); // [120, 1230]
advancedFilter([-1,-2]); // []
```
