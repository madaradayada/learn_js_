// Метод sort()

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]

// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores); // [2, 27, 3, 4, 41, 7, 75]
// Масив рядків сортується за алфавітом.
// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];
// students.sort();
// console.log(students); // [ 'Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля' ]
// Водночас порядковий номер великих літер менший, ніж у малих.
// const letters = ["b", "B", "a", "A", "c", "C"];
// letters.sort();
// console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c'

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// Свій порядок сортування чисел

// массив.sort((a, b) => {
// Тіло колбек-функції
//   });

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

// Свій порядок сортування рядків

// firstString.localeCompare(secondString)

// Він викликається на рядку, який потрібно порівняти (firstString) з тим, що був переданий йому як аргумент (secondString).
// "a".localeCompare("b"); // -1
// "b".localeCompare("a"); // 1
// "a".localeCompare("a"); // 0
// "b".localeCompare("b"); // 0

// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']

// Сортування об'єктів

// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Полі", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Ківі", score: 94 },
//   ];

//   const inAscendingScoreOrder = students.sort(
//     (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
//   );

//   const inDescendingScoreOrder = students.sort(
//     (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
//   );

//   const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//     firstStudent.name.localeCompare(secondStudent.name)
//   );
