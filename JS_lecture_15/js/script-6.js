// Веб-сховище

// Web Storage API

// Локальне сховище

// •	setItem(key, value) - створює новий, або оновлює вже існуючий запис у сховищі.
// •	getItem(key) - повертає зі сховища значення з ключем key.
// •	removeItem(key) - видаляє зі сховища запис з ключем key.
// •	clear() - повністю очищає всі записи сховища.
// •	length - кількість записів у сховищі.

// Збереження

// Використовуючи метод setItem(key, value), можна додати новий запис у вигляді пари ключ:значення.

// localStorage.setItem("ui-theme", "light");
// localStorage.setItem("sidebar", "expanded");
// localStorage.setItem("notification-level", "mute");
// Якщо необхідно зберегти щось, крім рядка, наприклад, масив або об'єкт, необхідно перетворити їх у рядок методом JSON.stringify().
// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem("settings", JSON.stringify(settings));

// Читання

// localStorage.setItem("ui-theme", "dark");

// const theme = localStorage.getItem("ui-theme");
// console.log(theme);// "dark"

// В іншому випадку, необхідно розпарсити значення методом JSON.parse(), щоб отримати валідні дані.
// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem("settings", JSON.stringify(settings));

// const savedSettings = localStorage.getItem("settings");
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings);// settings object

// Видалення

// Метод removeItem(key) видаляє зі сховища вже існуючий запис з ключем key.
// localStorage.setItem("ui-theme", "dark");
// console.log(localStorage.getItem("ui-theme"));// "dark"

// localStorage.removeItem("ui-theme");
// console.log(localStorage.getItem("ui-theme"));// null

// Очищення сховища

// localStorage.setItem("ui-theme", "light");
// localStorage.setItem("sidebar", "expanded");
// localStorage.setItem("notification-level", "mute");
// console.log(localStorage.getItem("ui-theme"));// "light"
// console.log(localStorage.getItem("sidebar"));// "expanded"
// console.log(localStorage.getItem("notification-level"));// "mute"

// localStorage.clear();
// console.log(localStorage.getItem("ui-theme"));// null
// console.log(localStorage.getItem("sidebar"));// null
// console.log(localStorage.getItem("notification-level"));// null

// Зберігаємо повідомлення

// const form = document.querySelector(".feedback-form");
// const localStorageKey = "goit-example-message";

// form.elements.message.value = localStorage.getItem(localStorageKey) ?? "";

// form.addEventListener("input", (evt) => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });

// Сервіс для localStorage

// storage.js
// const save = (key, value) => {
//   try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(key, serializedState);
//   } catch (error) {
//     console.error("Set state error: ", error.message);
//   }
// };

// const load = key => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error("Get state error: ", error.message);
//   }
// };

// export default {
//   save,
//   load,
// };
