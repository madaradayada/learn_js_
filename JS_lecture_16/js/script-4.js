//	Проміси

// •	Очікування (pending) - початковий стан під час створення промісу.
// •	Виконано (fulfilled) - операція виконана успішно з будь-яким результатом.
// •	Відхилено (rejected) - операція відхилена з помилкою.

// Відмінності промісу і callback-функції:

// •	Колбеки - це функції, обіцянки - це об'єкти.
// •	Колбеки передаються як аргументи з зовнішнього коду у внутрішній, а обіцянки повертаються з внутрішнього коду у зовнішній.
// •	Колбеки обробляють успішне або неуспішне завершення операції, обіцянки нічого не обробляють.
// •	Колбеки можуть обробляти декілька подій, обіцянки пов'язані тільки з однією подією.

// Створення

// const promise = new Promise((resolve, reject) => {
// Asynchronous operation
//   });

// •	resolve(value) - функція для виклику у разі успішної операції. Переданий їй аргумент буде значенням виконаного промісу.
// •	reject(error) - функція для виклику у разі помилки. Переданий їй аргумент буде значенням відхиленого промісу.

// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// Метод then()

// promise.then(onResolve, onReject)
// •	onResolve(value) - буде викликана у разі успішного виконання промісу і отримає його результат як аргумент.
// •	onReject(error) - буде викликана у разі виконання промісу з помилкою і отримає її як аргумент.

// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// Will run first
// console.log("Before promise.then()");

// Registering promise callbacks
// promise.then(
// onResolve will run third or not at all
//   value => {
//     console.log("onResolve call inside promise.then()");
//     console.log(value); // "Success! Value passed to resolve function"
//   },
// onReject will run third or not at all
//   error => {
//     console.log("onReject call inside promise.then()");
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// Will run second
// console.log("After promise.then()");

// Метод catch()

// promise.catch(error => {
// Promise rejected
//   });

//   Колбек-функція буде викликана у разі виконання промісу з помилкою, і отримає її як аргумент.
// Change value of isSuccess variable to call resolve or reject
//   const isSuccess = true;

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isSuccess) {
//         resolve("Success! Value passed to resolve function");
//       } else {
//         reject("Error! Error passed to reject function");
//       }
//     }, 2000);
//   });

//   promise
//     .then(value => {
//       console.log(value);
//     })
//     .catch(error => {
//       console.log(error);
//     });

// Метод finally()

// promise.finally(() => {
// Promise fulfilled or rejected
//   });

// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// promise
//   .then(value => console.log(value)) // "Success! Value passed to resolve function"
//   .catch(error => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log("Promise settled")); // "Promise settled"

// Ланцюжки промісів

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(5);
//     }, 2000);
//   });

//   promise
//     .then(value => {
//       console.log(value); // 5
//       return value * 2;
//     })
//     .then(value => {
//       console.log(value); // 10
//       return value * 3;
//     })
//     .then(value => {
//       console.log(value); // 30
//     })
//     .catch(error => {
//       console.log(error);
//     })
//     .finally(() => {
//       console.log("Final task");
//     });

// Промісифікація функцій

// const fetchUserFromServer = (username, onSuccess, onError) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
// Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         onSuccess("success value");
//       } else {
//         onError("error");
//       }
//     }, 2000);
//   };

//   const onFetchSuccess = user => {
//     console.log(user);
//   };

//   const onFetchError = error => {
//     console.error(error);
//   };

//   fetchUserFromServer("Mango", onFetchSuccess, onFetchError);

// Краще, якщо функція не зважає на той код, який буде використовувати її результат

// const fetchUserFromServer = username => {
//     return new Promise((resolve, reject) => {
//       console.log(`Fetching data for ${username}`);

//       setTimeout(() => {
// Change value of isSuccess variable to simulate request status
//         const isSuccess = true;

//         if (isSuccess) {
//           resolve("success value");
//         } else {
//           reject("error");
//         }
//       }, 2000);
//     });
//   };

//   fetchUserFromServer("Mango")
//     .then(user => console.log(user))
//     .catch(error => console.error(error));
