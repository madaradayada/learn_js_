// Цей код ідеально підходить для демонстрації роботи з кольорами, DOM-елементами та подіями.
//  Застосовується, наприклад, у тестових проєктах, тренуваннях або веб-додатках для налаштування тем.

// Функція для генерації випадкового HEX-кольору
function getRandomHexColor() {
  // Генеруємо число від 0 до 16777215 (максимум для 24-бітного кольору) і перетворюємо в шістнадцятковий формат
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Знаходимо кнопку, яка змінює колір, за класом "change-color"
const changeColorButton = document.querySelector(".change-color");

// Знаходимо елемент, де відображатиметься поточне значення кольору
const colorValue = document.querySelector(".color");

// Знаходимо елемент <body>, щоб змінювати його фон
const bodyEl = document.querySelector("body");

// Додаємо обробник події 'click' на кнопку
changeColorButton.addEventListener("click", onCangeColorButton);

// Функція, яка виконується при натисканні кнопки
function onCangeColorButton(event) {
  let color = getRandomHexColor(); // Генеруємо випадковий колір

  bodyEl.style.backgroundColor = color; // Застосовуємо цей колір до фону сторінки
  colorValue.textContent = color; // Виводимо значення кольору в текстовий елемент
  console.log(color); // Додатково виводимо в консоль
}
