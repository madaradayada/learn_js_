//	Модульність коду

// Збирання модулів

// ECMAScript Modules (ESM)

// greeter.js
// const helloMessage = "hello!";
// const goodbyeMessage = "goodbye!";

// export const hello = () => helloMessage;
// export const goodbye = () => goodbyeMessage;

// index.js
// import { hello, goodbye } from "./greeter";

// console.log(hello());// "hello!"
// console.log(goodbye());// "goodbye!"

// Named export

// my-module.js
// const sqrt = Math.sqrt;
// export const square = x => x * x;
// export const diag = (x, y) => sqrt(square(x) + square(y));

// main.js
// import { square, diag } from "./path/to/my-module";

// console.log(square(11));// 121
// console.log(diag(4, 3));// 5

// Другий спосіб - це явно вказати об'єкт з властивостями для експорту.

// my-module.js
// const sqrt = Math.sqrt;
// const square = x => x * x;
// const diag = (x, y) => sqrt(square(x) + square(y));

// export { square, diag };
// main.js
// import { square, diag } from "./path/to/myModule";

// console.log(square(11));// 121
// console.log(diag(4, 3));// 5

// Наступний синтаксис імпортує всі експорти модуля як об'єкт із зазначеним ім'ям. Це називається namespace import.
// main.js
// import * as myModule from "./path/to/my-module";

// console.log(myModule.square(11));// 121
// console.log(myModule.diag(4, 3));// 5

// Default export

// my-func.js
// export default function myFunc() {
// ...
// }
// my-class.js
// export default class MyClass {
// ...
// }
// main.js
// import myFunc from "./path/to/my-func";
// import MyClass from "./path/to/my-class";

// myFunc();

// const inst = new MyClass();
