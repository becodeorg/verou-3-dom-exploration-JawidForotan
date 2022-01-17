const selectAllSections = document.querySelectorAll("section");
console.log(selectAllSections);
const sec1 = selectAllSections[0];
sec1.setAttribute("class", "section1");
const selectSec1 = document.querySelector(".section1");
const ol = selectSec1.children[3];
ol.setAttribute("class", "myOl");
const selectOl = document.querySelector(".myOl");
const olChildren = selectOl.children;
const firstOlChild = olChildren[0];
const lastOlChild = olChildren[4];
selectOl.insertBefore(lastOlChild, firstOlChild);

const sec2 = selectAllSections[1];
sec2.setAttribute("class", "section2");
const selectSec2 = document.querySelector(".section2");
console.log(selectSec2.children);
const sec2H2 = selectSec2.children[0];
console.log(sec2H2);
const section2Children = selectSec2.children;
selectSec2.removeChild(section2Children[0]);
console.log(selectSec2.children);

const sec3 = selectAllSections[2];
sec3.setAttribute("class", "section3");
const selectSec3 = document.querySelector(".section3");
console.log(selectSec3.children);
const sec3Children = selectSec3.children[0];
sec3Children.className = "Sec3Div";
const selectSec3Div = document.querySelector(".Sec3Div");
const divChildren = selectSec3Div.children;
const sec3DivH2 = selectSec3Div.children[0];
selectSec3Div.removeChild(divChildren[0]);
// appending h2 of 2nd section to 3rd section
selectSec3Div.prepend(sec2H2);
console.log(divChildren);
// appending h2 of 3rd section to 2nd
selectSec2.prepend(sec3DivH2);
// remove 3rd section
selectSec3.remove();
