//	Таймери

// Тайм-аут

// const timerId = setTimeout(callback, delay, arg1, arg2, ...);

// •	callback - функція, виконання якої необхідно запланувати.
// •	delay - час в мілісекундах, через який callback-функція буде викликана один раз.

// const button = document.querySelector("button");

// const onClick = () => {
//   const timerId = setTimeout(() => {
//     console.log("I love async JS!");
//   }, 2000);

//   console.log(timerId);
// };
// button.addEventListener("click", onClick);

// const greet = () => {
//     console.log("Hello!");
//   };

//   const timerId = setTimeout(greet, 3000);

//   clearTimeout(timerId);

// Інтервал

// const timerId = setInterval(callback, delay, arg1, arg2, ...);

// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let timerId = null;
// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });
// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });

// Частота спрацьовування лічильника

// У браузерного таймера є мінімально можлива затримка. У сучасних браузерах вона коливається приблизно від 0 до 4 мілісекунд.
//  У старіших браузерах затримка може бути більшою і досягати 15 мілісекунд. За стандартом, мінімальна затримка становить 4 мілісекунди,
//   тому різниці між setTimeout(callback, 1) і setTimeout(callback, 4) немає.
