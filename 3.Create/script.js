/* Select the article from the body wich already exist*/
const articleFromBody = document.querySelector("article");
/* Names array */
const names = [
  "jawid",
  "Jian",
  "Michelle",
  "Sara",
  "Cynthia",
  "Feruz",
  "Nicolas",
];
/* Loop through array and show each element in a section with different color and bg color*/
for (let i = 0; i < names.length; i++) {
  const sec = document.createElement("section");
  const par = document.createElement("p");
  articleFromBody.appendChild(sec).appendChild(par);
  par.innerText = names[i];
  par.style.color = "#" + Math.floor(Math.random() * 13711110).toString(13);
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  sec.style.backgroundColor = randomColor;
}
