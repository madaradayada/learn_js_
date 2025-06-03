//  Цей скрипт додає до <input> клас valid або invalid залежно від того,
// чи правильна довжина введеного значення. Це зручно для візуальної валідації полів
// (наприклад, обведення зеленим або червоним кольором).

// Знаходимо елемент <input> за id="validation-input"

let inputEl = document.querySelector("#validation-input");

let inputLength = inputEl.dataset.length;

const input = document.querySelector("input");
inputEl.addEventListener("change", (e) => {
  const text = e.target.value;

  if (text.length === +inputLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
