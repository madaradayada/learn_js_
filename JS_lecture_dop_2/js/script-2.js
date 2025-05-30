// Асинхронні функції

// const fetchFriends = () => {
//      return fetch("my-api.com/me").then(token => {
//       console.log(token);
//      });
//     };

// const fetchFriends = () => {
//      return fetch("my-api.com/me")
//       .then(token => {
//        return fetch(`my-api.com/profile?token=${token}`);
//       })
//       .then(user => {
//        console.log(user.id);
//       });
//     };

// const fetchFriends = () => {
//      return fetch("my-api.com/me")
//       .then(token => {
//        return fetch(`my-api.com/profile?token=${token}`);
//       })
//       .then(user => {
//        return fetch(`my-api.com/users/${user.id}/friends`);
//       });
//     };

//     fetchFriends()
//      .then(friends => console.log(friends))
//      .catch(error => console.error(error));

// const fetchFriends = async () => {
//      const token = await fetch("my-api.com/me");
//      const user = await fetch(`my-api.com/profile?token=${token}`);
//      const friends = await fetch(`my-api.com/users/${user.id}/friends`);
//      return friends;
//     };

//     fetchFriends()
//      .then(friends => console.log(friends))
//      .catch(error => console.error(error));

// Синтаксис async/await

// const fetchUsers = async () => {
//      const response = await fetch("https://jsonplaceholder.typicode.com/users");
//      const users = await response.json();
//      return users;
//     };

//     fetchUsers().then(users => console.log(users));

// Function declaration
// async function foo() {
// ...
//   }

// Functional expression
//   const foo = async function () {
// ...
//   };

// Arrow function
//   const foo = async () => {
// ...
//   };

// Object method
//   const user = {
//     async foo() {
// ...
//     },
//   };

// Class method
//   class User {
//     async foo() {
// ...
//     }
//   }

// Обробка помилок

// const fetchUsers = async () => {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/users");
//       const users = await response.json();
//       console.log(users);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   fetchUsers();

// const fetchUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     return users;
//   };

//   fetchUsers()
//     .then(users => console.log(users))
//     .catch(error => console.log(error));

// const fetchUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     return users;
//   };

// ❌ SyntaxError: await is only valid in async function
//   const users = await fetchUsers();

// const fetchUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     return users;
//   };

//   const doStuff = async () => {
//     try {
//       const users = await fetchUsers();
//       console.log(users);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   doStuff();

// Паралельні запити

// const fetchUsers = async () => {
//   const baseUrl = "https://jsonplaceholder.typicode.com";
//   const firstResponse = await fetch(`${baseUrl}/users/1`);
//   const secondResponse = await fetch(`${baseUrl}/users/2`);
//   const thirdResponse = await fetch(`${baseUrl}/users/3`);

//   const firstUser = await firstResponse.json();
//   const secondUser = await secondResponse.json();
//   const thirdUser = await thirdResponse.json();

//   console.log(firstUser, secondUser, thirdUser);
// };

// fetchUsers();

// const fetchUsers = async () => {
//     const baseUrl = "https://jsonplaceholder.typicode.com";
//     const userIds = [1, 2, 3];

// 1. Створюємо масив промісів
//     const arrayOfPromises = userIds.map(async userId => {
//       const response = await fetch(`${baseUrl}/users/${userId}`);
//       return response.json();
//     });

// 2. Запускаємо усі проміси паралельно і чекаємо на їх завершення
//     const users = await Promise.all(arrayOfPromises);
//     console.log(users);
//   };

//   fetchUsers();
