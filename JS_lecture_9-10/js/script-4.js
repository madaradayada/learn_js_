// Метод filter()

// масив.filter((element, index, array) => {
// Тіло колбек-функції
//   });

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// Оригінальний масив не змінився
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// const students = [
//     { name: "Манго", courses: ["математика", "фізика"] },
//     { name: "Полі", courses: ["інформатика", "математика"] },
//     { name: "Ківі", courses: ["фізика", "біологія"] },
//   ];

//   const allCourses = students.flatMap(student => student.courses);
// ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія']

// const uniqueCourses = allCourses.filter(
//     (course, index, array) => array.indexOf(course) === index
//   );

// Масив об'єктів

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Манго і Ківі

// const worst = students.filter((student) => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Аякс

// // В колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Полі і Х'юстон
