// Область видимості

// Глобальна область видимості

// const globalValue = 10;

// console.log(globalValue); // 10

// function foo() {
//   console.log(globalValue); // 10
// }

// for (let i = 0; i < 5; i++) {
//   console.log(globalValue); // 10

//   if (i === 2) {
//     console.log(globalValue); // 10
//   }
// }

// Блокова область видимості

// function foo() {
//     const a = 20;
//     console.log(a); // 20

//     for (let i = 0; i < 5; i++) {
//       console.log(a); // 20

//       if (i === 2) {
//         console.log(a); // 20
//       }
//     }
//   }

// ❌ Помилка! Змінна a - недоступна у глобальній області видимості
//   console.log(a);

//   for (let i = 0; i < 3; i++) {
// ❌ Помилка! Змінна a - недоступна в цій області видимості
//     console.log(a);
//   }

// Пошук за ланцюжком областей видимості
