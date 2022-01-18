const _initTime = Date.now();

function getElapsedTime() {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
}

function alertFunction() {
  const selectDiv = document.querySelectorAll(".displayedSquare");
  for (i = 0; i < selectDiv.length; i++) {
    selectDiv[i].addEventListener("click", () => {
      alert("The button shouldn't be clicked");
    });
  }
}

function clickOnSquare(e) {
  const selectSec = document.querySelector(".displayedSquare-wrapper");
  const div = document.createElement("div");
  div.setAttribute("class", "displayedSquare");
  selectSec.appendChild(div);
  const color = e.target.classList[1];
  div.classList.add(color);

  alertFunction();

  const selectList = document.querySelector(".list");
  const creatList = document.createElement("li");
  selectList.appendChild(creatList);
  creatList.innerHTML = getElapsedTime();

  window.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      const randomColor = "#" + Math.floor(Math.random() * 5000);
      document.body.style.background = randomColor;
    } else if (e.code === "Backspace") {
      selectList.remove();
    } else if (e.key === "s") {
      div.remove();
    }
  });
}
const actionSquares = document.querySelectorAll(".actionSquare-wrapper");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}
