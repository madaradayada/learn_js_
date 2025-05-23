// REST API

// API (інтерфейс прикладного програмування) - набір чітко визначених правил зв'язку між різними програмними компонентами.
//  Інтерфейс описує, що можна попросити програму зробити і що буде в результаті.

// REST (representational state transfer) - стиль бекенд-архітектури, ґрунтується на наборі принципів,
//  які описують, яким чином визначаються і адресуються мережеві ресурси.

// REST API - бекенд побудований за принципом REST. Слугує прошарком між веб-застосунком і базою даних.
//  Має стандартний інтерфейс для звернення до ресурсів. Працює як веб-сайт, ми посилаємо HTTP-запит з клієнта на сервер,
//   а у відповідь, замість HTML-сторінки, отримуємо дані в JSON-форматі.

// Формат запиту

// http метод ВИЗНАЧАЄ ЯКУ операцію нам потрібно виконувати
// http заголовки дозволяє передавати службову інформацію про запит
// шлях шлях до ресурсу
// тіло блок запиту, що містить дані

// HTTP-методи

// POST створити новий ресурс
// GET отримати набір ресурсів або один ресурс
// PUT оновити існуючий або створити новий
// PATCH оновити існуючий ресурс
// DELETE видалити ресурс

// HTTP-заголовки

// Accept: text/html
// Content-Type: application/json

// Шляхи

// GET <https://bookstore.com/api/orders>
// Accept: application/json

// GET <https://bookstore.com/api/orders/289>
// Accept: application/json

// Коди відповідей

// 1XX мають інфрмаційне призначення
// 2XX успішне проведення операції
// 3XX описує все, що пов'язане з перенаправленням
// 4XX вказує на помилку клієнта
// 5XX вказує на помилку з боку сервера

// 200 ок ,201 created, 400 bad request, 401 unauthorized,403 forbidden, 404 not found,500 internet server error

// Запит-Відповідь

// GET bookstore.com/api/customers
// Accept: application/json

// Status: 200 OK
// Content-Type: application/json
// Body: JSON-дані про всіх клієнтів

// GET bookstore.com/api/customers/289
// Accept: application/json

// Status: 200 OK
// Content-Type: application/json
// Body: JSON-дані про клієнта

// POST bookstore.com/api/customers
// Content-Type: application/json
// Body: { "username": "Mango", "email": "mango@gmail.com" }

// Status: 201 CreatedContent-type: application/jsonBody: { "id": 18674, "username": "Mango", "email": "mango@gmail.com" }
