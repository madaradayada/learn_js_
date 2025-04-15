// Створення та видалення елементів

// document.createElement(tagName);

const heading = document.createElement("h1");
console.log(heading); // <h1></h1>

heading.textContent = "This is a heading";
console.log(heading); // <h1>This is a heading</h1>

const image = document.createElement("img");
image.src = "https://picsum.photos/id/15/320/240";
image.alt = "Nature";
console.log(image); // <img src="https://picsum.photos/id/15/320/240" alt="Nature" />

// Додавання

// const list = document.querySelector(".usernames");

// // Adds an item to the end of the list
// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);

// Видалення

// const text = document.querySelector(".text");
// text.remove();

// Оптимізація роботи з DOM
