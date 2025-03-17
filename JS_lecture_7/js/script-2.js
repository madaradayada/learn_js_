// 	Деструктуризація об'єктів

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// const accessType = book.isPublic ? "публічному" : "закритому";
// const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType} доступі.`;

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// Деструктуризуємо
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = isPublic ? "публічному" : "закритому";

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };

// Додамо зображення обкладинки, якщо воно відсутнє в об'єкті книги
// const {
//   title,
//   coverImage = "https://via.placeholder.com/640/480",
//   author,
// } = book;

// console.log(title); // The Last Kingdom
// console.log(author); // Bernard Cornwell
// console.log(coverImage); // https://via.placeholder.com/640/480

// Зміна імені змінної

// const firstBook = {
//     title: "The Last Kingdom",
//     coverImage:
//       "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
//   };

//   const {
//     title: firstTitle,
//     coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
//   } = firstBook;

//   console.log(firstTitle); // The Last Kingdom
//   console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

//   const secondBook = {
//     title: "Сон смішної людини",
//   };

//   const {
//     title: secondTitle,
//     coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
//   } = secondBook;

//   console.log(secondTitle); // Сон смішної людини
//   console.log(secondCoverImage); // https://via.placeholder.com/640/480

// Деструктуризація в циклах

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "На березі спокійних вод",
//       author: "Роберт Шеклі",
//       rating: 8.51,
//     },
//   ];

//   for (const book of books) {
//     console.log(book.title);
//     console.log(book.author);
//     console.log(book.rating);
//   }

// for (const book of books) {
//     const { title, author, rating } = book;

//     console.log(title);
//     console.log(author);
//     console.log(rating);
//   }

// for (const { title, author, rating } of books) {
//     console.log(title);
//     console.log(author);
//     console.log(rating);
//   }

// Глибока деструктуризація

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };

//   const {
//     name,
//     tag,
//     stats: { followers, views: userViews, likes: userLikes = 0 },
//   } = user;

//   console.log(name); // Jacques Gluke
//   console.log(tag); // jgluke
//   console.log(followers); // 5603
//   console.log(userViews); // 4827
//   console.log(userLikes); // 1308
