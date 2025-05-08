// Формат JSON

// JSON (JavaScript Object Notation) - сучасний текстовий формат зберігання
//  і передачі структурованих даних у текстовій формі.

// user.json
// {
//   "name": "Josh",
//   "weight": 175,
//   "age": 30,
//   "eyecolor": "brown",
//   "isHappy": true,
//   "cars": ["Chevy", "Honda"],
//   "favoriteBook": {
//     "title": "The Last Kingdom",
//     "author": "Bernard Cornwell",
//     "rating": 8.38
//   }
// }

// Метод JSON.stringify()

// const dog = {
//     name: "Mango",
//     age: 3,
//     isHappy: true,
//   };

//   const dogJSON = JSON.stringify(dog);
//   console.log(dogJSON);// "{"name":"Mango","age":3,"isHappy":true}"

// const dog = {
//     name: "Mango",
//     age: 3,
//     isHappy: true,
//     bark() {
//       console.log("Woof!");
//     },
//   };

//   const dogJSON = JSON.stringify(dog);
//   console.log(dogJSON);// "{"name":"Mango","age":3,"isHappy":true}"

// Також, при спробі перетворити функцію в JSON, результатом буде undefined.
// JSON.stringify(() => console.log("Well, this is awkward"));// undefined

// Метод JSON.parse()

// const json = '{"name":"Mango","age":3,"isHappy":true}';

// const dog = JSON.parse(json);
// console.log(dog);// {name: "Mango", age: 3, isHappy: true}
// console.log(dog.name);// "Mango"

// Обробка помилок

// try {
// Code that may throw a runtime error
//     } catch (error) {
// Error handling
//     }

// 1.	Спочатку виконується код всередині блоку try.
// 2.	Якщо помилки відсутні, блок catch ігнорується і управління передається далі.
// 3.	Якщо в блоці try сталася помилка, його виконання зупиняється та інтерпретатор переходить до блоку catch.

// Змінна error - це об'єкт помилки з інформацією про те, що сталося. У цього об'єкта є кілька корисних властивостей:
// •	name - тип помилки. Для помилки парса - це SyntaxError.
// •	message - повідомлення про деталі помилки.
// •	stack - стек викликів функцій на момент помилки. Використовується для налагодження.

// Script will crash during parse
// const data = JSON.parse("Well, this is awkward");
// console.log("❌ You won't see this log");

// try {
//     const data = JSON.parse("Well, this is awkward");
//   } catch (error) {
//     console.log(error.name);// "SyntaxError"
//     console.log(error.message);// Unexpected token W in JSON at position 0
//   }

//   console.log("✅ This is fine, we handled parse error in try...catch");

// try {
//     const data = JSON.parse('{username: "Mango"}');
//   } catch (error) {
//     console.log(error.name);// "SyntaxError"
//     console.log(error.message);// "Unexpected token u in JSON at position 1"
//   }
//   console.log("✅ This is fine, we handled parse error in try...catch");

// Фази виконання коду

// Фаза інтерпретації або оцінки

// Фаза виконання

// console.log('This message will not appear in the console');

// cos value = 5;

// try...catch ловить тільки помилки, які виникли під час виконання коду (runtime errors).
// Це означає, що код повинен бути синтаксично правильним, інакше фаза виконання просто не запуститься.
// Помилки, які виникають під час фази оцінки, називаються помилками парсингу.