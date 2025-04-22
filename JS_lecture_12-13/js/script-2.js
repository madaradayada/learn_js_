// 	Навігація по DOM
console.log(document);

const body = document.body;
console.log(body);

const list = document.querySelector(".list");
console.log(list);

const firstListItem = list.firstElementChild;
console.log(firstListItem);

// •	elem.parentNode батьківський елемент
// •	elem.childNodes псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
//•	elem.children зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
// •	elem.firstChild перший дочірній елемент всередині elem, включно з текстовими вузлами
//•	elem.firstElementChild вибере перший дочірній вузол-елемент всередині elem
// •	elem.lastChild останній дочірній
//•	elem.lastElementChild вибере останній дочірній вузол-елемент всередині elem
//•	elem.previousSibling вибере елемент «зліва» від elem (його попереднього сусіда).
// •	elem.previousElementSibling вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
//•	elem.nextSibling вибере елемент «праворуч» від elem (його наступного сусіда)
// •	elem.nextElementSibling вибере вузол-елемент «праворуч» від elem (його наступного сусіда).
