// Цей код ідеально підходить для демонстрації роботи з кольорами, DOM-елементами та подіями.
//  Застосовується, наприклад, у тестових проєктах, тренуваннях або веб-додатках для налаштування тем.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
const bodyEl = document.querySelector("body");

changeColorButton.addEventListener("click", onCangeColorButton);

function onCangeColorButton(event) {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorValue.textContent = color;
  console.log(color);
}
