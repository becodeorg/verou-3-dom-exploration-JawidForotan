/*Display the body element and body children element*/
console.log(`title: ${document.title}`);
document.title = "Modifying the DOM";
console.log(`new title: ${document.title}`);
document.body.style.backgroundColor = "#FF69B4";
console.log(`background: ${document.body.style.backgroundColor}`);

/*Change the background color randomly */
var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
document.body.style.backgroundColor = randomColor;

console.log(document.body.children);
/*Loop through all children of the body*/
let c = document.body.children;
for (let i = 0; i < c.length; i++) {
  console.log(c[i]);
}
