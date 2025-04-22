//	Властивості та атрибути

const image = document.querySelector(".image");
console.log(image.src); // https://picsum.photos/id/9/320/240
console.log(image.alt); // A laptop

image.src = "https://picsum.photos/id/13/640/480";
image.alt = "River bank";

// Властивість textContent

const textEl = document.querySelector(".article-text");
console.log(textEl.textContent); // text inside p.article-text

const titleEl = document.querySelector(".article-title");
titleEl.textContent = "Welcome to Bahamas!";

// Властивість classList

const link = document.querySelector(".link");
console.log(link.classList);

const hasActiveClass = link.classList.contains("is-active");
console.log(`hasActiveClass - ${hasActiveClass}`);

link.classList.add("special");
console.log(link.classList);

link.classList.remove("is-active");
console.log(link.classList);

link.classList.toggle("is-active");
console.log(link.classList);

link.classList.replace("special", "regular");
console.log(link.classList);

// Властивість style

const button = document.querySelector(".btn");

button.style.backgroundColor = "teal";
button.style.fontSize = "24px";
button.style.textAlign = "center";

console.log(button.style); // inline styles object

// Атрибути

const image2 = document.querySelector(".image");

console.log(image2.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

console.log(image2.hasAttribute("src")); // true

console.log(image2.getAttribute("alt")); // "Rocks and waterfall"

image.setAttribute("alt", "Amazing nature");

console.log(image2.getAttribute("alt")); // Amazing nature

// data-атрибути

const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

console.log(saveBtn.dataset.action); //save
console.log(closeBtn.dataset.action); //close

// •	value - містить поточний текстовий контент елементів форм.
//•	checked - зберігає стан чекбокса або радіокнопки.
//  •	name - зберігає значення, вказане в HTML-атрибуті name.
//  •	src - шлях до зображення тегу <img>.
