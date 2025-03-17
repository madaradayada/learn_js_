// Патерн «Об'єкт параметрів»

// function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
// Робимо щось з параметрами
//     console.log(title);
//     console.log(numberOfPages);
// }
// І так далі
// ❌ Що таке 736? Що таке 10283? Що таке true?
//   doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);

// Робимо щось з властивостями об'єкта
// console.log(book.title);
// console.log(book.numberOfPages);
// І так далі
// У такому випадку, під час її виклику передаємо один об'єкт з необхідними властивостями.
// ✅ Все зрозуміло
// doStuffWithBook({
// title: "The Last Kingdom",
// numberOfPages: 736,
// downloads: 10283,
// rating: 8.38,
// isPublic: true,
// });

// function doStuffWithBook(book) {
//     const { title, numberOfPages, downloads, rating, isPublic } = book;
//     console.log(title);
//     console.log(numberOfPages);
// І так далі
//   }

// function doStuffWithBook({
//   title,
//   numberOfPages,
//   downloads,
//   rating,
//   isPublic,
// }) {
//   console.log(title);
//   console.log(numberOfPages);
// І так далі
// }
