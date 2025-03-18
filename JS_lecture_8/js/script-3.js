//	Стрілочні функції

// Звичайне оголошення функції
// function classicAdd(a, b, c) {
//     return a + b + c;
//   }
// Те саме стрілочною функцією
//   const arrowAdd = (a, b, c) => {
//     return a + b + c;
//   };

// const add = (a, b, c) => {
//     return a + b + c;
//   };

// const add = a => {
//     return a + 5;
//   };

// const greet = () => {
//     console.log("Привіт!");
//   };

// Неявне повернення

// const add = (a, b, c) => {
//     console.log(a, b, c);
//     return a + b + c;
//   };

// const add = (a, b, c) => a + b + c;

// До
// function classicAdd(a, b, c) {
//     return a + b + c;
//   }

// Після
//   const arrowAdd = (a, b, c) => a + b + c;

// const add = (...args) => {
//     console.log(args);
//   };

//   add(1, 2, 3);

// Стрілочні функції як колбеки

// const numbers = [5, 10, 15, 20, 25];

// Оголошення функції
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);
