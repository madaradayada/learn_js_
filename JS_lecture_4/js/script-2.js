// Ітерація по масиву

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// Цикл for...of

// for (const variable of iterable) {
// тіло циклу
//   }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";
// for (const character of string) {
//   console.log(character);
// }

// Оператори break і continue

/*
const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message;
for (const client of clients) {
  // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
  // іменем клієнта. Якщо збігається - записуємо в message повідомлення
  // про успіх і робимо break, щоб далі не шукати
  if (client === clientNameToFind) {
    message = "Клієнт з таким ім'ям є в базі даних!";
    break;
  }
  // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
  message = "Клієнт з таким ім'ям відсутній в базі даних!";
}
console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

*/

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = "Клієнт з таким ім'ям відсутній в базі даних!";
// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }
//   // Якщо не збігається, то на цій ітерації нічого не робимо
// }
// console.log(message); // Клієнт з таким ім'ям є в базі даних!

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }
