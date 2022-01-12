const importantElement = document.querySelectorAll(".important");
/* Set The title to every element with important title */
for (let i = 0; i < importantElement.length; i++) {
  importantElement[i].setAttribute("title", "This is an important item");
  /* Log the new title i console */
  console.log(importantElement[i].title);
}
/* Select all the img tags and loop through them */
const images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++) {
  if (images[i].className !== "important") {
    images[i].style.display = "none";
  }
}
/* Loop through all the paragraphs and display their content in the console */
const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
  console.log(paragraphs[i].innerText);
  if (paragraphs[i].className) {
    console.log(paragraphs[i].className);
  }
  if (paragraphs[i].className == "") {
    paragraphs[i].style.color =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
}
