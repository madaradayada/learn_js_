// Цей код чудово підходить для тренування роботи з DOM, подіями та стилями.
//  Користувач вводить кількість, натискає "Create", і на сторінці
//   з'являються кольорові квадрати, які можна знищити натиском "Destroy".

// Отримуємо елемент <input> з області #controls, у якому користувач вводить кількість блоків
const inputNum = document.querySelector("#controls>input");

// Кнопка для створення блоків, атрибут data-create
const btnCreate = document.querySelector("button[data-create]");

// Кнопка для видалення всіх блоків, атрибут data-destroy
const btnDestroy = document.querySelector("button[data-destroy]");

// Контейнер, куди будуть додаватися кольорові блоки
const boxes = document.querySelector("#boxes");

// Функція для генерації випадкового HEX-кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Функція для створення блоків
const createBoxes = (amount) => {
  const elementsToAdd = []; // Масив для зберігання створених div-елементів
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div"); // Створюємо новий div
    div.style.height = `${30 + 10 * i}px`; // Висота збільшується на 10px з кожним блоком
    div.style.width = `${30 + 10 * i}px`; // Ширина також збільшується
    div.style.background = getRandomHexColor(); // Призначаємо випадковий колір фону
    elementsToAdd.push(div); // Додаємо блок до масиву
  }
  return elementsToAdd; // Повертаємо масив готових div
};

// Функція для очищення контейнера від усіх блоків
const destroyBoxes = () => {
  boxes.innerHTML = ""; // Очищення вмісту контейнера
};

// Додаємо слухач на кнопку створення блоків
btnCreate.addEventListener("click", () => {
  let boxesToAdd = createBoxes(inputNum.value); // Створюємо блоки з урахуванням введеного числа
  boxes.append(...boxesToAdd); // Додаємо всі блоки до DOM за один раз
});

// Виводимо в консоль значення поля введення (необов’язково)
console.log(inputNum.value);

// Додаємо слухач на кнопку знищення блоків
btnDestroy.addEventListener("click", () => {
  destroyBoxes.call(); // Викликаємо функцію очистки
});
