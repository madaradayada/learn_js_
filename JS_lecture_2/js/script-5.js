// Рядки

// Рядок - це індексований набір з нуля або більше символів, взятих в одинарні або подвійні лапки.

// Конкатенація рядків

// const message = "Mango " + "is" + " happy";
// console.log(message); // Mango is happy

// Шаблонні рядки

// const guestName = "Манго";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"

// Властивості і методи рядків

/* 
- length;
- toLowerCase();
- toUpperCase();
- indexOf('');
- includes('');
- endsWith('');
- replace('.js', '.min.js');
- replaceAll('.js', '.min.js');
-slice(from, to); 

const message = "Welcome to Bahamas!";
console.log(message.length); 

console.log(message.toLowerCase());
console.log(message.toUpperCase()); 

console.log(message.indexOf("to"));
console.log(message.indexOf("hello")); 

const productName = "Ремонтний дроїд";
console.log(productName.includes("н"));
console.log(productName.includes("Н")); 

const jsFileName = "script.js";
console.log(jsFileName.endsWith(".js")); 

const cssFileName = "styles.css";
console.log(cssFileName.endsWith(".js")); 

const jsFileName = "script.js";
const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log(minifiedJsFileName); // "script.min.js"

const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

const productName = "Repair droid";
console.log(productName.slice(0, 4)); // "Repa"
console.log(productName.slice(3, 9)); // "air dr"
console.log(productName.slice(0, productName.length)); // "Repair droid"
console.log(productName.slice(7, productName.length)); // "droid"


*/
