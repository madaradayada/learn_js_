//  Цей скрипт додає до <input> клас valid або invalid залежно від того,
// чи правильна довжина введеного значення. Це зручно для візуальної валідації полів
// (наприклад, обведення зеленим або червоним кольором).

// Знаходимо елемент <input> за id="validation-input"
let inputEl = document.querySelector("#validation-input");

// Отримуємо значення, вказане в data-атрибуті "data-length" (очікувана довжина)
let inputLength = inputEl.dataset.length;

// знаходимо <input>
const input = document.querySelector("input");

// Додаємо слухача події 'change' (відбувається при втраті фокусу після зміни значення)
inputEl.addEventListener("change", (e) => {
  const text = e.target.value; // Отримуємо введений текст

  // Якщо довжина тексту дорівнює очікуваній (data-length), додаємо клас "valid"
  if (text.length === +inputLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    // Інакше — додаємо клас "invalid"
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
