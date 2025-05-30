// CRUD

// Для взаємодії з ресурсами бекенду використовується чотири операції: створення (create),
//  читання (read), оновлення (update) і видалення (delete).
//   Для кожної з них визначений стандартний HTTP-метод.

// Method	Description

// POST	Операція create - створити новий ресурс.

// GET	Операція read - отримати набір ресурсів або один ресурс за ідентифікатором.

// PUT и PATCH	Операція update - оновити ресурс за ідентифікатором.

// DELETE	Операція delete - видалити ресурс за ідентифікатором

// Читання

// fetch("https://jsonplaceholder.typicode.com/posts")
//  .then(response => response.json())
//  .then(posts => console.log(posts))
//  .catch(error => console.log(error));

// Change this number to fetch different post
// const postId = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//  .then(response => response.json())
//  .then(post => console.log(post))
//  .catch(error => console.log(error));

// Створення

// const postToAdd = {
//      author: "Mango",
//      body: "CRUD is awesome",
//     };

//     const options = {
//      method: "POST",
//      body: JSON.stringify(postToAdd),
//      headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//      },
//     };

//     fetch("https://jsonplaceholder.typicode.com/posts", options)
//      .then(response => response.json())
//      .then(post => console.log(post))
//      .catch(error => console.log(error));

// {
//      "id": 1,
//      "author": "Mango",
//      "content": "CRUD is awesome"
//     }

// Оновлення

// Change value of id property to update different post
// const postToUpdate = {
//      id: 1,
//      body: "CRUD is really awesome",
//     };

//     const options = {
//      method: "PATCH",
//      body: JSON.stringify(postToUpdate),
//      headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//      },
//     };

//     fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
//      .then(response => response.json())
//      .then(post => console.log(post))
//      .catch(error => console.log("ERROR" + error));

// {
//      id: 1,
//      author: 'Mango',
//      content: 'CRUD is really awesome',
//     }

// Метод PATCH заміняє в існуючому ресурсі значення, передані в тілі запиту властивостей.
//  Метод PUT повністю заміняє ресурс.

// Видалення

// const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//  method: "DELETE",
// })
//  .then(() => console.log("Post deleted"))
//  .catch(error => console.log("Error:", error));
