// Lesson 2 - task 7

console.log(typeof (null));
// null это специальное значение обозначающие "нечего", "пусто". И имеет тип object.

console.log(typeof (0));
// Это число с типом number.

console.log(null == 0);
// При сравнении === > < Вернет false так как сравниваются разные типы данных.

console.log(Number(null) == 0);
// Вернет true так как при преобразовании null в тип number 0.