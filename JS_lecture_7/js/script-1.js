// Синтаксис spread і rest

//  spread: передача аргументів

// const temps = [14, -4, 25, 8, 11];
// В консолі буде масив
// console.log(temps);
// ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN
// В консолі буде набір окремих чисел
// console.log(...temps);
// ✅ Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25

// spread: створення нового масиву

// const temps = [14, -4, 25, 8, 11];
// Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// spread: створення нового об'єкта

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

//  rest: збирання всіх аргументів функції

// Як оголосити параметри функції таким чином,
// щоб можна було передати будь-яку кількість аргументів?
// function multiply() {
// ...
//   }
//   multiply(1, 2);
//   multiply(1, 2, 3);
//   multiply(1, 2, 3, 4);

// function multiply(...args) {
//     console.log(args); // масив усіх аргументів
//   }
//   multiply(1, 2);
//   multiply(1, 2, 3);
//   multiply(1, 2, 3, 4);

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//     console.log(firstNumber); // Значення першого аргументу
//     console.log(secondNumber); // Значення другого аргументу
//     console.log(otherArgs); // Масив інших аргументів
//   }
//   multiply(1, 2);
//   multiply(1, 2, 3);
//   multiply(1, 2, 3, 4);
