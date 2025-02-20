// 	Методи масиву

// Методи split() і join()

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]
// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.join("")); // "JavaScriptцецікаво"
// console.log(words.join(" ")); // "JavaScript це цікаво"
// console.log(words.join("-")); // "JavaScript-це-цікаво"

// Метод indexOf()

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// Метод includes()

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false

// Перевірка багатьох умов з includes()

// const fruit = "apple";
// if (fruit === "apple" || fruit === "strawberry") {
//   console.log("It is a red fruit!");
// }

// const fruit = "apple";
// if (
//   fruit === "apple" ||
//   fruit === "strawberry" ||
//   fruit === "cherry" ||
//   fruit === "cranberries"
// ) {
//   console.log("It is a red fruit!");
// }

// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);
// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// Методи push() і pop()

// const numbers = [];
// numbers.push(1);
// console.log(numbers); // [1]
// numbers.push(2);
// console.log(numbers); // [1, 2]
// numbers.push(3);
// console.log(numbers); // [1, 2, 3]
// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]
// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]
// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]
// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]
// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]
// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// Метод slice()

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 3));

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice());

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1));
// console.log(clients.slice(2));

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-2));

// Метод splice()

// const scores = [1, 2, 3, 4, 5];
// Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
// const deletedScores = scores.splice(0, 3);
// Тепер масив scores містить два елементи
// console.log(scores); // [4, 5]
// А масив deletedScores містить три видалені елементи
// console.log(deletedScores); // [1, 2, 3]

// const colors = ["red", "green", "blue"];
// colors.splice(2, 0, "purple");
// console.log(colors);

// const colors = ["red", "green", "blue"];
// colors.splice(1, 0, "yellow", "pink");
// console.log(colors);

// Заміна

// splice(position, num, new_element_1, new_element_2, ...)

// const languages = ["C", "C++", "Java", "JavaScript"];
// Заміняємо елемент з індексом 1 на новий
// languages.splice(1, 1, "Python");
// console.log(languages);

// Заміняємо один елемент (з індексом 2) на декілька
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages);

// Метод concat()

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst);

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst);

// console.log(oldClients);
// console.log(newClients);
