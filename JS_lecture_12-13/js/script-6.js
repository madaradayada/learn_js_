// Властивість innerHTML

// Читання

// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

// Зміна

// const title2 = document.querySelector(".article .title");
// title2.innerHTML = 'New and <span class="accent">improved</span> title';

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // // Adding all the markup in one operation
// list.innerHTML = markup;

// Додавання

// const article2 = document.querySelector(".article");
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;

// // Replace += with = operator. See the difference?
// // Article title is lost because we overwrite element content.
// article2.innerHTML += htmlString;

// Метод insertAdjacentHTML()

// elem.insertAdjacentHTML(position, string);

// •	"beforebegin" - перед elem
// •	"afterbegin" - всередині elem, перед усіма дітьми
// beforeend" - всередині elem, після усіх дітей
// afterend" - після elem

// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
