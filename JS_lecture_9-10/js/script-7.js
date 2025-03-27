// Методи every() і some()

// Метод every()

// масив.every((element, index, array) => {
// Тіло колбек-функції
//   });

// Усі елементи більші або дорівнюють нулю? - так
// [1, 2, 3, 4, 5].every(value => value >= 0); // true

// Усі елементи більші або дорівнюють нулю? - ні
// [1, 2, 3, -10, 4, 5].every(value => value >= 0); // false

// Метод some()

// масив.some((element, index, array) => {
// Тіло колбек-функції
//   });

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Чи є хоча б один елемент, що менший нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// Чи є хоча б один елемент, що менший нуля? - так
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// Масив об'єктів

// const fruits = [
//     { name: "apples", amount: 100 },
//     { name: "bananas", amount: 0 },
//     { name: "grapes", amount: 50 },
//   ];

// every поверне true тільки, якщо усіх фруктів буде більше 0 штук
//   const allAvailable = fruits.every(fruit => fruit.amount > 0); // false

// some поверне true, якщо хоча б одного фрукту буде більше 0 штук
//   const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true
