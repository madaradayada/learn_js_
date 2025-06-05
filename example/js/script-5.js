//  Цей скрипт оновлює ім’я в режимі реального часу — якщо користувач щось вводить у поле,
//  це одразу показується. Якщо поле залишити порожнім — з’явиться текст "Anonymous".

// Знаходимо текстове поле введення за id="name-input"
const textInput = document.querySelector("#name-input");

// Знаходимо елемент, у якому буде відображатися введене ім’я (id="name-output")
const output = document.querySelector("#name-output");

// Додаємо слухача події 'input' на текстове поле
textInput.addEventListener("input", (event) => {
  // Оновлюємо текст у виводі значенням, яке користувач вводить у поле
  output.textContent = event.target.value;

  // Якщо поле порожнє, відображаємо значення за замовчуванням — 'Anonymous'
  if (event.target.value === "") {
    output.textContent = "Anonymous";
  }
});
