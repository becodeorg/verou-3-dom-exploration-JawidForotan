console.log(`title: ${document.title}`);
console.log(document.body);
document.title = "Modifying the DOM";
console.log(`new title: ${document.title}`);
document.body.style.backgroundColor = "#FF69B4";
console.log(`background: ${document.body.style.backgroundColor}`);
/*Change the background color randomly */
function randomBgColor() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let a = Math.random() * 255;
  var bgColor = "rgb(" + r + "," + g + "," + a + ")";
  console.log(bgColor);
  document.body.style.backgroundColor = bgColor;
}
randomBgColor();
console.log(document.body.children);
/*Loop through all children of the body*/
console.log("loop");
let c = document.body.children;
for (i = 0; i < c.length; i++) {
  console.log(c[i]);
}
/** Second part */
const aTag = document.querySelector("a");
console.log(aTag);
console.log(aTag.href);
console.log(aTag.innerText);
const aTags = document.querySelectorAll("a");
console.log(aTags);
console.log(aTags[0].innerText);
console.log(aTags[1].innerText);
let imgById = document.querySelector("img#img1");
let imgByClass = document.querySelector("img.img2");
console.log(imgById);
console.log(imgByClass);

/*Add a title attribute to every element that has the important class */

let addTitle = document.querySelectorAll("p.important");
for (i = 0; i < addTitle.length; i++) {
  addTitle[i].setAttribute("title", "very important element");
  console.log(addTitle[i]);
}

/*Select all the img tags and loop through them. If they have no important class, turn their display property to none*/
let images = document.querySelectorAll("img");
for (i = 0; i < images.length; i++) {
  if (images[i].className == "important") {
    images[i].style.display = "block";
    console.log(images[i]);
  } else {
    images[i].style.display = "none";
  }
}

/*Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname has well*/
let parContent = document.getElementsByTagName("p");
for (i = 0; i < parContent.length; i++) {
  function randomBgColor() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let a = Math.random() * 255;
    var bgColor = "rgb(" + r + "," + g + "," + a + ")";
    parContent[i].style.color = bgColor;
  }
  randomBgColor();
  console.log(parContent[i].innerText);
}
let parWithClassName = document.querySelectorAll("p.important");
for (i = 0; i < parWithClassName.length; i++) {
  console.log(parWithClassName[i].className);
}
