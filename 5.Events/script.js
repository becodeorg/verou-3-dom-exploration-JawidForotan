const _initTime = Date.now();

function getElapsedTime() {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
}

function clickOnSquare(e) {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
  const div = document.createElement("div");
  div.setAttribute("class", "displayedSquare");
  const selectSec = document.querySelector(".displayedSquare-wrapper");
  selectSec.appendChild(div);
  const color = e.target.classList[1];
  div.classList.add(color);
 }

const actionSquares = document.querySelectorAll(".actionSquare-wrapper");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}

const selectMain = document.querySelector("main");

const createH1 = document.createElement("h1");
createH1.setAttribute("id", "myH1");
selectMain.prepend(createH1);
function myFunction(e) {
  let unicode = e.which;
  document.getElementById("myH1").innerHTML = unicode;
}

