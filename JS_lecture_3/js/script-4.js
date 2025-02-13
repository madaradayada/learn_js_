// 	Область видимості

// const value = 5;

// if (true) {
//   console.log("Block scope: ", value); // 5
// }
// console.log("Global scope: ", value); // 5

// if (true) {
//     const value = 5;
//     console.log("Block scope: ", value); // 5
//   }
//   console.log("Global scope: ", value);

const global = "global";

if (true) {
  const blockA = "block A";

  // Бачимо глобальну + локальну A
  console.log(global); // 'global'
  console.log(blockA); // block A

  // Змінні blockB і blockC не знайдені в доступних областях видимості.
  // Буде помилка звернення до змінної.
  console.log(blockB); // ReferenceError: blockB is not defined
  console.log(blockC); // ReferenceError: blockC is not defined

  if (true) {
    const blockB = "block B";

    // Бачимо глобальну + зовнішню A + локальну B
    console.log(global); // global
    console.log(blockA); // block A
    console.log(blockB); // block B

    // Змінна blockC не знайдена в доступних областях видимості.
    // Буде помилка звернення до змінної.
    console.log(blockC); // ReferenceError: blockC is not defined
  }
}

if (true) {
  const blockC = "block C";

  // Бачимо глобальну + локальну C
  console.log(global); // global
  console.log(blockC); // block C

  // Змінні blockA і blockB не знайдені в доступних областях видимості.
  // Буде помилка звернення до змінної.
  console.log(blockA); // ReferenceError: blockA is not defined
  console.log(blockB); // ReferenceError: blockB is not defined
}

// Бачимо лише глобальну
console.log(global); // global

// Змінні blockA, blockB і blockC не знайдені в доступних областях видимості.
// Буде помилка звернення до змінної.
console.log(blockA); // ReferenceError: blockA is not defined
console.log(blockB); // ReferenceError: blockB is not defined
console.log(blockC); // ReferenceError: blockC is not defined
