// abcd a.bcd ab.cd abc.d a.b.c.d

const dotSimple = (str) => {
  //ініціалізуємо масив рядків першим символом рядка
  let result = [str[0]];

  // починаємо з другого символу (індекс 1), ітеруємо по всьому рядку
  for (let i = 1; i < str.length; i++) {
    // копіюємо поточний масив реультатів, щоб працювати зі зебреженим на поточному кроці варіантов
    const slice = result.slice();
    // для кожного з варіантів у копії додаємо крапку в кінець
    const copy = slice.map((value) => value + ".");
    // додаємо нові варіати з крапками до основного масиву
    result = [...result, ...copy];
    // додамо поточну літеру до всіх варіантів результату
    result = result.map((value) => value + str[i]);
  }
  return result;
};

console.log(dotSimple("abc"));

// 1. result = ["a"]
// 2. оброблюємо значення b беремо копію ["a"] додаємо . ["a."] об'єднуємо ["a", "a."] додаємо b ["ab", "a.b"]
// 3. обробляємо значення с  беремо копію ["ab", "a.b"] додаємо . ["ab.", "a.b."] об'єднуємо
//  ["ab", "a.b", "ab.", "a.b."] додаємо в кінець с ["abc", "a.bc", "ab.c", "a.b.c"]

// 2 варіант

// Рекурсивна функція, яка генерує всі можливі комбинації вставлення крапок між літерами

const dotSimpleRec = (str, offset = 1, result = [str[0]]) => {
  // досягли кінця рядка
  if (offset === str.length) {
    return result; //повертаємо фінальний масив результатів
  }

  // поточний символЮ який додаємо до вже існуючих комбінацій
  const char = str[offset];

  // копіюємо існуючі кобмінації та додаємо до кожної крапку
  const copy = result.slice().map((it) => it + ".");
  // додаємо нові варіанти з крапками до результату
  result.push(...copy);
  // до всіх варіантів з крапками і без додаємо поточний символ
  result = result.map((it) => it + char);
  // рекурсивно обробляємо наступний елемент рядка
  return dotSimpleRec(str, offset + 1, result);
};

// 1. abc offset = 1 result = "a", char = "b", копія з крапкою ["a."], об'єднуємо ["a", "a."], додаємо b до кожного
// ["ab", "a.b"]

// 2. offset = 2, result = ["ab", "a.b"], char = "c", копію з . ["ab.", "a.b."], додаємо копію ["ab", "a.b", "ab.", "a.b."]
// додаємо "c" до кожного result =  ["abc", "a.bc", "ab.c", "a.b.c"]

// 3.  offset = 3 === str.lenght функція завершається

console.log(dotSimple("abc"));
console.log(dotSimpleRec("abc"));
console.log(dotSimpleRec("abcd"));
