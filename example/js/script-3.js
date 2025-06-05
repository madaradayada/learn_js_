// Масив об'єктів з інформацією про зображення: URL і альтернативний текст
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Знаходимо елемент <ul> або <div> з класом "gallery", до якого будемо додавати зображення
const list = document.querySelector(".gallery");

// Створюємо HTML-розмітку для кожного зображення і обгортаємо його в <li>
const markup = images
  .map(
    (image) =>
      `<li><img class="picture" src=${image.url} width = '400' alt='${image.alt}'></img></li>`
  )
  .join(""); // Об’єднуємо всі рядки в один HTML-фрагмент

// Додаємо готову HTML-розмітку до галереї в кінець (beforeend)
list.insertAdjacentHTML("beforeend", markup);

// Отримуємо всі зображення з класом "picture"
const pictures = document.querySelectorAll(".picture");

// Задаємо стилі для елемента галереї (наприклад, <ul>)
list.style.display = "flex";
list.style.flexWrap = "column-reverse";
list.style.listStyle = "none";
list.style.gap = "30px";
list.style.justifyContent = "center";
