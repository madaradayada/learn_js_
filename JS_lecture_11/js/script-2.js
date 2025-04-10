// Правила визначення this

// function foo() {
//     console.log(this);
//   }
//   foo(); // window без "use strict" і undefined з "use strict"

// this в методі об'єкта

// const petya = {
//     username: "Petya",
//     showThis() {
//       console.log(this);
//     },
//     showName() {
//       console.log(this.username);
//     },
//   };

//   petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
//   petya.showName(); // 'Petya'

function showThis() {
  console.log("this in showThis: ", this);
}

// Викликаємо у глобальному контексті
showThis(); // this in showThis: Window

const user = {
  username: "Mango",
};

// Записуємо посилання на функцію у властивість об'єкта
// Зверніть увагу, що це не виклик - немає ()
user.showContext = showThis;

// Викликаємо функцію в контексті об'єкта
// this буде вказувати на поточний об'єкт, в контексті
// якого здійснюється виклик, а не на глобальний об'єкт.
user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

// this в callback-функціях

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

makeMessage(customer.getFullName); // Буде помилка у виклику функції

// this у стрілочних функціях

const showThis = () => {
  console.log("this in showThis: ", this);
};

showThis(); // this in showThis: window

const user = {
  username: "Mango",
};
user.showContext = showThis;

user.showContext(); // this in showThis: window

const hotel = {
  username: "Resort hotel",
  showThis() {
    const foo = () => {
      // Стрілки запам'ятовують контекст під час оголошення
      // з батьківської області видимості
      console.log("this in foo: ", this);
    };

    foo();
    console.log("this in showThis: ", this);
  },
};

hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}
