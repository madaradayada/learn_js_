// Цей скрипт дозволяє користувачеві в реальному часі змінювати розмір тексту за допомогою слайдера.
//  Дуже корисно для інтерактивних UI або налаштувань доступності.

// Знаходимо елемент <span> або <p> з id="text", в якому змінюватиметься розмір шрифту
const textEl = document.getElementById("text");

// Знаходимо елемент <input type="range"> з id="font-size-control"
const inputEl = document.getElementById("font-size-control");

// Додаємо слухача події "input" — спрацьовує під час кожного руху повзунка
inputEl.addEventListener("input", (e) => {
  // Отримуємо значення з повзунка (типу число, наприклад: 18)
  const size = inputEl.value;

  // Задаємо розмір шрифту для тексту, додаючи "px" до значення
  textEl.style.fontSize = size + "px";
});
