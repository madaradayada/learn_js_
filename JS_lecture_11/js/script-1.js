// Контекст виконання функції

// Петя біжить швидко, тому що Петя намагається зловити поїзд.
// const petya = {
//     username: "Petya",
//     showName() {
//       console.log(petya.username);
//     },
//   };
//   petya.showName();

// Петя біжить швидко, тому що він (this) намагається зловити поїзд.
// const petya = {
//     username: "Petya",
//     showName() {
//       console.log(this.username);
//     },
//   };

//   petya.showName();

// const bookShelf = {
//     authors: ["Бернард Корнуелл", "Роберт Шеклі"],
//     getAuthors() {
//       return this.authors;
//     },
//     addAuthor(authorName) {
//       this.authors.push(authorName);
//     },
//   };

//   console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі"]
//   bookShelf.addAuthor("Лі Таніт");
//   console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі", "Лі Таніт"]
