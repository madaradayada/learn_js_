// Цей скрипт дозволяє користувачеві в реальному часі змінювати розмір тексту за допомогою слайдера.
//  Дуже корисно для інтерактивних UI або налаштувань доступності.

const textEl = document.getElementById("text");
const inputEl = document.getElementById("font-size-control");

inputEl.addEventListener("input", (e) => {
  const size = inputEl.value;

  textEl.style.fontSize = size + "px";
});
