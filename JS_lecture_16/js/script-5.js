//	Методи класу Promise

// Promise.all()

// Promise.all([promise1, promise2, promise3, ...])

// const makePromise = (text, delay) => {
//     return new Promise(resolve => {
//       setTimeout(() => resolve(text), delay);
//     });
//   };

//   const promiseA = makePromise("promiseA value", 1000);
//   const promiseB = makePromise("promiseB value", 3000);

//   Promise.all([promiseA, promiseB])
//     .then(value => console.log(value)) //["promiseA value", "promiseB value"]
//     .catch(error => console.log(error));

// Promise.race()

// Promise.race([promise1, promise2, promise3, ...])

// const makePromise = (text, delay) => {
//     return new Promise(resolve => {
//       setTimeout(() => resolve(text), delay);
//     });
//   };

//   const promiseA = makePromise("promiseA value", 1000);
//   const promiseB = makePromise("promiseB value", 3000);

//   Promise.race([promiseA, promiseB])
//     .then(value => console.log(value)) // "promiseA value"
//     .catch(error => console.log(error));

// Promise.resolve() і Promise.reject()

// Fulfilled promise
// new Promise(resolve => resolve("success value")).then(value =>
//     console.log(value)
//   );

//   Promise.resolve("success value").then(value => console.log(value));

// Rejected promise
//   new Promise((resolve, reject) => reject("error")).catch(error =>
//     console.error(error)
//   );

//   Promise.reject("error").catch(error => console.error(error));

// const makeGreeting = guestName => {
//     if (guestName === "" || guestName === undefined) {
//       return {
//         success: false,
//         message: "Guest name must not be empty",
//       };
//     }

//     return {
//       success: true,
//       message: `Welcome ${guestName}`,
//     };
//   };

//   const result = makeGreeting("Mango");

//   if (result.success) {
//     console.log(result.message);
//   } else {
//     console.error(result.message);
//   }

// приклад

// const makeGreeting = (guestName, onSuccess, onError) => {
//     if (guestName === "" || guestName === undefined) {
//       return onError("Guest name must not be empty");
//     }
//     onSuccess(`Welcome ${guestName}`);
//   };

//   makeGreeting(
//     "Mango",
//     greeting => console.log(greeting),
//     error => console.error(error)
//   );

// приклад

// const makeGreeting = guestName => {
//     if (guestName === "" || guestName === undefined) {
//       return Promise.reject("Guest name must not be empty");
//     }

//     return Promise.resolve(`Welcome ${guestName}`);
//   };

//   makeGreeting("Mango")
//     .then(greeting => console.log(greeting))
//     .catch(error => console.error(error));
