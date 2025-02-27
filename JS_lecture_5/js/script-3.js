// 	Стек викликів

// function fnA() {
//     console.log("Лог всередині функції fnA до виклику fnB");
//     fnB();
//     console.log("Лог всередині функції fnA після виклику fnB");
//   }

//   function fnB() {
//     console.log("Лог всередині функції fnB");
//   }

//   console.log("Лог до виклику fnA");
//   fnA();
//   console.log("Лог після виклику fnA");

// "Лог до виклику fnA"
// "Лог всередині функції fnA до виклику fnB"
// "Лог всередині функції fnB"
// "Лог всередині функції fnA після виклику fnB"
// "Лог після виклику fnA"

// Стек викликів

// function bar() {
//     console.log("bar");
//   }

//   function baz() {
//     console.log("baz");
//   }

//   function foo() {
//     console.log("foo");
//     bar();
//     baz();
//   }

//   foo();

// Переповнення стека викликів
