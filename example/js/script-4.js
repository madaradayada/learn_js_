// Цей код створює інтерактивний лічильник: при натисканні кнопок "+" або "–" значення змінюється та оновлюється на сторінці.

// Отримуємо початкове значення лічильника з елемента з id="value" та перетворюємо його в число
let valueEl = Number(document.querySelector("#value").textContent);

// Отримуємо сам DOM-елемент, де відображається значення лічильника
let counterValue = document.querySelector("#value");

// Знаходимо кнопку зменшення значення — це перший дочірній елемент контейнера з id="counter"
const dekrBtn = document.querySelector("#counter").firstElementChild;

// Знаходимо кнопку збільшення значення — це останній дочірній елемент контейнера з id="counter"
const inkrBtn = document.querySelector("#counter").lastElementChild;

// Додаємо обробник події на кнопку збільшення значення
inkrBtn.addEventListener("click", (event) => {
  valueEl += 1; // Збільшуємо значення лічильника на 1
  counterValue.innerText = valueEl; // Оновлюємо текст на екрані
});

// Додаємо обробник події на кнопку зменшення значення
dekrBtn.addEventListener("click", (event) => {
  valueEl -= 1; // Зменшуємо значення лічильника на 1
  counterValue.innerText = valueEl; // Оновлюємо текст на екрані
});
