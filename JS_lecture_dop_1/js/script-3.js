// AJAX

// AJAX (Asynchronous JavaScript and XML) - метод отримання або відправлення даних
// з подальшим оновленням інтерфейсу за цими даними, без потреби перезавантаження сторінки.

// На веб-сторінці відбувається подія (сторінка завантажується, натискається кнопка «Показати більше», відправляється форма тощо).
// На клієнті, за допомогою JavaScript, реакцією на цю подію буде виконуватися функція для роботи з сервером,
// де створюється і відправляється HTTP-запит.
// Сервер отримує і обробляє HTTP-запит, відправляючи назад у відповіді дані у форматі JSON.
// На клієнті, за допомогою JavaScript, відповідь від сервера обробляється, зчитуються дані і оновлюється інтерфейс.

// Fetch API

// fetch(url, options)

// url - шлях до даних на бекенді, які необхідно отримати, створити або змінити. Обов'язковий аргумент.
// options - об'єкт налаштувань запиту: метод (за замовчуванням GET), заголовки, тіло тощо. Необов'язковий аргумент.

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
// Response handling
//   })
//   .then(data => {
// Data handling
//   })
//   .catch(error => {
// Error handling
//   });

// Перевірка відповіді

// json() - парсить дані в JSON-форматі.
// text() - парсить дані в простому текстовому форматі, наприклад .csv (табличні дані).
// blob() - парсить дані, що описують файл, наприклад, зображення, аудіо або відео.

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
// Data handling
//   })
//   .catch(error => {
// Error handling
//   });

// Вкладка Network

// Робота з публічним REST API

// https://jsonplaceholder.typicode.com/users

// Цей шлях складається з наступних частин:

// https://jsonplaceholder.typicode.com - це ендпоінт, базовий URL, точка входу в API.
// /users - ресурс, до якого ми звертаємося.

// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetchUsers()
//     .then((users) => renderUsers(users))
//     .catch((error) => console.log(error));
// });

// function fetchUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users").then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function renderUsers(users) {
//   const markup = users
//     .map((user) => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join("");
//   userList.insertAdjacentHTML("beforeend", markup);
// }

// Зверніть увагу на те, що функція fetchUsers() повертає проміс,
// тому до результату її виклику ми додаємо ланцюжок методів then() і catch().

// Помилка новачка

// let globalVariable; // undefined

// Initializing data fetching
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(users => {
//     console.log("users inside then callback: ", users);

// Writing the result to a global variable
//     globalVariable = users;

// Everything is ok here, the data is in the variable
//     console.log("globalVariable inside fetch callback: ", globalVariable);
//   });

// No async data here
// console.log("globalVariable outside fetch: ", globalVariable); // undefined

// Параметри рядка запиту

// const url = "https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name";

// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetchUsers()
//     .then((users) => renderUsers(users))
//     .catch((error) => console.log(error));
// });

// function fetchUsers() {
//   return fetch(
//     "https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name"
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderUsers(users) {
//   const markup = users
//     .map((user) => {
//       return `
//           <li>
//             <p><b>Name</b>: ${user.name}</p>
//             <p><b>Email</b>: ${user.email}</p>
//             <p><b>Company</b>: ${user.company.name}</p>
//           </li>
//       `;
//     })
//     .join("");
//   userList.insertAdjacentHTML("beforeend", markup);
// }

// Клас URLSearchParams

// const searchParams = new URLSearchParams({
//     _limit: 5,
//     _sort: "name",
//   });

//   console.log(searchParams.toString()); // "_limit=5&_sort=name"

//   const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
//   console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"

// HTTP-заголовки

// const headers = new Headers({
//     "Content-Type": "application/json",
//     "X-Custom-Header": "custom value",
//   });

//   headers.append("Content-Type", "text/bash");
//   headers.append("X-Custom-Header", "custom value");
//   headers.has("Content-Type"); // true
//   headers.get("Content-Type"); // "text/bash"
//   headers.set("Content-Type", "application/json");
//   headers.delete("X-Custom-Header");

// const headers = {
//     "Content-Type": "application/json",
//     "X-Custom-Header": "custom value",
//   };

// fetch("https://jsonplaceholder.typicode.com/users", {
//   headers: {
//     Accept: "application/json",
//   },
// }).then(response => {
// ...
// });
