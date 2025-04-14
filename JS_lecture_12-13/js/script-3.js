// Методи функцій

// Метод call()

// foo.call(obj, arg1, arg2, ...)

// function greetGuest(greeting) {
//     console.log(`${greeting}, ${this.username}.`);
//   }

//   const mango = {
//     username: "Манго",
//   };
//   const poly = {
//     username: "Полі",
//   };

//   greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
//   greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі.

// Метод apply

// foo.apply(obj, [arg1, arg2, ...])

// function greetGuest(greeting) {
//     console.log(`${greeting}, ${this.username}.`);
//   }

//   const mango = {
//     username: "Манго",
//   };
//   const poly = {
//     username: "Полі",
//   };

//   greetGuest.apply(mango, ["Ласкаво просимо"]); // Ласкаво просимо, Манго.
//   greetGuest.apply(poly, ["З прибуттям"]); // З прибуттям, Полі.

// Метод bind()

// foo.bind(obj, arg1, arg2, ...)

// function greet(clientName) {
//     return `${clientName}, ласкаво просимо в «${this.service}».`;
//   }

//   const steam = {
//     service: "Steam",
//   };
//   const steamGreeter = greet.bind(steam);
//   steamGreeter("Манго"); // "Манго, ласкаво просимо в «Steam»."

//   const gmail = {
//     service: "Gmail",
//   };
//   const gmailGreeter = greet.bind(gmail);
//   gmailGreeter("Полі"); // "Полі, ласкаво просимо в «Gmail»."

// bind() і методи об'єкта

const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() - це виклик методу getFullName без об'єкта
  console.log(`Обробляємо заявку від ${callback()}.`);
}

makeMessage(customer.getFullName); // Виникне помилка на момент виклику функції

// ❌ Було
makeMessage(customer.getFullName); // Виникне помилка на момент виклику функції

// ✅ Стало
makeMessage(customer.getFullName.bind(customer)); // Обробляємо заявку від Jacob Mercer.
