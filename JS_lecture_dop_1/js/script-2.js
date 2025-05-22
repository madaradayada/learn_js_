// REST API

// API (інтерфейс прикладного програмування) - набір чітко визначених правил зв'язку між різними програмними компонентами.
//  Інтерфейс описує, що можна попросити програму зробити і що буде в результаті.

// REST (representational state transfer) - стиль бекенд-архітектури, ґрунтується на наборі принципів,
//  які описують, яким чином визначаються і адресуються мережеві ресурси.

// REST API - бекенд побудований за принципом REST. Слугує прошарком між веб-застосунком і базою даних.
//  Має стандартний інтерфейс для звернення до ресурсів. Працює як веб-сайт, ми посилаємо HTTP-запит з клієнта на сервер,
//   а у відповідь, замість HTML-сторінки, отримуємо дані в JSON-форматі.

// Формат запиту

// http метод
// http заголовки
// шлях
// тіло

// HTTP-методи

// POST
// GET
// PUT
// PATCH
// DELETE

// HTTP-заголовки

// Accept: text/html
// Content-Type: application/json

// Шляхи

// GET <https://bookstore.com/api/orders>
// Accept: application/json

// GET <https://bookstore.com/api/orders/289>
// Accept: application/json

// Коди відповідей

// 1XX
// 2XX
// 3XX
// 4XX
// 5XX

// 200 ок ,201 created, 400 bad reques, 401 unauthorized,403 forbidden, 404 not found,500 internet server error

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
