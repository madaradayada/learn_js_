// Цей код зручно використовувати для базової валідації логін-форми.
// Якщо поля не заповнені — з’явиться попередження, а якщо все гаразд — дані виведуться в консоль і форма очиститься.

// Знаходимо елемент форми за класом "login-form"
const form = document.querySelector(".login-form");

// Додаємо слухача події 'submit' на форму, при поданні викликається функція handleSubmit
form.addEventListener("submit", handleSubmit);

// Функція-обробник події надсилання форми
function handleSubmit(event) {
  event.preventDefault(); // Скасовує стандартну поведінку (перезавантаження сторінки)

  // Деструктуризація: отримуємо доступ до полів email і password з елементів форми
  const {
    elements: { email, password },
  } = event.currentTarget;

  // Перевірка: якщо хоча б одне з полів порожнє — показуємо попередження
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  // Створюємо об'єкт з даними користувача (можна надіслати на сервер або зберегти)
  const userDetails = { email: email.value, Password: password.value };

  // Виводимо дані в консоль для перевірки
  console.log(userDetails);

  // Очищаємо форму після відправки
  event.currentTarget.reset();
}
