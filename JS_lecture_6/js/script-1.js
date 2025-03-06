// 	Знайомство з об'єктами

// Створення об'єкта

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

// Вкладені властивості

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//       country: "Jamaica",
//       city: "Ocho Rios",
//     },
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
//   const bookTitle = book.title;
//   console.log(bookTitle);
//   const bookGenres = book.genres;
//   console.log(bookGenres);
//   const bookPrice = book.price;
//   console.log(bookPrice);

// Звернення до вкладених властивостей

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//       country: "Jamaica",
//       city: "Ocho Rios",
//     },
//     hobbies: ["swiming", "music", "sci-fi"],};
//   const location = user.location;
//   console.log(location);
//   const country = user.location.country;
//   console.log(country);

// const hobbies = user.hobbies;
// console.log(hobbies);
// const firstHobby = user.hobbies[0];
// console.log(firstHobby);
// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies);

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

//   const bookTitle = book["title"];
//   console.log(bookTitle); // 'The Last Kingdom'

//   const bookGenres = book["genres"];
//   console.log(bookGenres); // ['historical prose', 'adventurs']

//   const propKey = "author";
//   const bookAuthor = book[propKey];
//   console.log(bookAuthor); // 'Bernard Cornwell'

// Зміна значення властивості

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

//   book.rating = 9;
//   book.isPublic = false;
//   book.genres.push("драма");

//   console.log(book.rating); // 9
//   console.log(book.isPublic); // false
//   console.log(book.genres); // ['historical prose', 'adventures', 'драма']

// Додавання властивостей

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

//   book.pageCount = 836;
//   book.originalLanguage = "en";
//   book.translations = ["ua", "ru"];

//   console.log(book.pageCount); // 836
//   console.log(book.originalLanguage); // 'en'
//   console.log(book.translations); // ['ua', 'ru']

// Короткі властивості

// const name = "Генрі Сибола";
// const age = 25;

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25

// const name = "Генрі Сибола";
// const age = 25;
// const user = {
//   name,
//   age,
// };
// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25

// Обчислювальні властивості

// const propName = "name";
// const user = {
//   age: 25, };
// user[propName] = "Генрі Сибола";
// console.log(user.name); // 'Генрі Сибола'

// const propName = "name";
// const user = {
//   age: 25,
// Ім'я цієї властивості буде взяте зі значення змінної propName
//   [propName]: "Генрі Сибола", };
// console.log(user.name); // 'Генрі Сибола'

// Методи об'єкта

// ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//     books: ["The Last Kingdom", "Dream Guardian"],
//     // Це метод об'єкта
//     getBooks() {
//       console.log("Цей метод буде повертати всі книги - властивість books");
//     },
//     // Це метод об'єкта
//     addBook(bookName) {
//       console.log("Цей метод буде додавати нову книгу у властивість books");
//     }, };
//   // Виклики методів
//   bookShelf.getBooks();
//   bookShelf.addBook("Нова книга");

// ❌ Слабкопозв'язані, незалежні сутності
// const books = [];
// function getBooks() {}
// function addBook() {}

// Доступ до властивостей об'єкта в методах

// const bookShelf = {
//     books: ["The Last Kingdom"],
//     getBooks() {
//       console.log(this);
//     },
//   };
// Перед крапкою знаходиться об'єкт bookShelf,
// тому, викликаючи метод, this буде зберігати посилання на нього.
//   bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

// const bookShelf = {
//     books: ["The Last Kingdom"],
//     getBooks() {
//       return this.books;
//     },
//     addBook(bookName) {
//       this.books.push(bookName);
//     },
//     removeBook(bookName) {
//       const bookIndex = this.books.indexOf(bookName);
//       this.books.splice(bookIndex, 1);
//     },
//   };
//   console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
//   bookShelf.addBook("The Mist");
//   bookShelf.addBook("Dream Guardian");
//   console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
//   bookShelf.removeBook("The Mist");
//   console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']
