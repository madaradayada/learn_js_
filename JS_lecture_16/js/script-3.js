//	Дата і час

// Створення дати

// const date = new Date();

// console.log(date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(date.toString());
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// Unix час

// console.log(new Date(0));
// "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

// console.log(new Date(15000));
// "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"

// const date = new Date();
// console.log(date.getTime()); // 1624021654154

// Встановлення дати

// const teamMeetingDate = new Date("March 16, 2030");
// console.log(teamMeetingDate);
// "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

// const preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00");
// console.log(preciseTeamMeetingDate);
// "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

// new Date("2030-03-16");
// new Date("2030-03");
// new Date("2018");
// new Date("03/16/2030");
// new Date("2030/03/16");
// new Date("2030/3/16");
// new Date("March 16, 2030");
// new Date("March 16, 2030 14:25:00");
// new Date("2030-03-16 14:25:00");
// new Date("2030-03-16T14:25:00");
// new Date("16 March 2030");

// const date = new Date(2030, 2, 16, 14, 25, 0, 0);
// console.log(date);
// Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)

// Методи

// Геттери
// const date = new Date();
// console.log("Date: ", date);

// Повертає день місяця від 1 до 31
// console.log("getDate(): ", date.getDate());

// Повертає день тижня від 0 до 6
// console.log("getDay(): ", date.getDay());

// Повертає місяць від 0 до 11
// console.log("getMonth(): ", date.getMonth());

// Повертає рік з 4 цифр
// console.log("getFullYear(): ", date.getFullYear());

// Повертає години
// console.log("getHours(): ", date.getHours());

// Повертає хвилини
// console.log("getMinutes(): ", date.getMinutes());

// Повертає секунди
// console.log("getSeconds(): ", date.getSeconds());

// Повертає мілісекунди
// console.log("getMilliseconds(): ", date.getMilliseconds());

// const date = new Date();
// console.log("Date: ", date);

// Повертає день місяця від 1 до 31
// console.log("getUTCDate(): ", date.getUTCDate());

// Повертає день тижня від 0 до 6
// console.log("getUTCDay(): ", date.getUTCDay());

// Повертає місяць від 0 до 11
// console.log("getUTCMonth(): ", date.getUTCMonth());

// Повертає рік з 4 цифр
// console.log("getUTCFullYear(): ", date.getUTCFullYear());

// Повертає години
// console.log("getUTCHours(): ", date.getUTCHours());

// Повертає хвилини
// console.log("getUTCMinutes(): ", date.getUTCMinutes());

// Повертає секунди
// console.log("getUTCSeconds(): ", date.getUTCSeconds());

// Повертає мілісекунди
// console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());

// Сеттери

// const date = new Date("March 16, 2030 14:25:00");

// date.setMinutes(50);
// "Sat Mar 16 2030 14:50:00 GMT+0200"

// date.setFullYear(2040, 4, 8);
// "Tue May 08 2040 14:50:00 GMT+0300"

// Форматування дати

// date.toString();
// "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

// date.toTimeString();
// "14:25:00 GMT+0200 (Eastern European Standard Time)"

// date.toLocaleTimeString();
// "2:25:00 PM"

// date.toUTCString();
// "Sat, 16 Mar 2030 12:25:00 GMT"

// date.toDateString();
// "Sat Mar 16 2030"

// date.toISOString();
// "2030-03-16T12:25:00.000Z"

// date.toLocaleString();
// "3/16/2030, 2:25:00 PM"

// date.getTime();
// 1899894300000
