const selectInput = document.querySelector("#firstname");
selectInput.addEventListener("keyup", () => {
  const inputValue = selectInput.value;
  const selectSpan = document.querySelector("#display-firstname");
  selectSpan.innerHTML = `First Name: ${inputValue}`;
});

const selectSecInput = document.querySelector("#age");
selectSecInput.addEventListener("keyup", () => {
  const inputValue = selectSecInput.value;
  if (inputValue > 18) {
    const selectSecToHide = document.querySelector("#a-hard-truth");
    selectSecToHide.style.visibility = "visible";
  } else {
    selectSecToHide.style.visibility = "hidden";
  }
});

const password = document.querySelector("#pwd");
const passwordConfirm = document.querySelector("#pwd-confirm");
passwordConfirm.addEventListener("keyup", () => {
  if (password.value.length < 6 || password.value != passwordConfirm.value) {
    password.style.backgroundColor = "red";
    passwordConfirm.style.backgroundColor = "red";
  } else {
    password.style.backgroundColor = "white";
    passwordConfirm.style.backgroundColor = "white";
  }
});

const darkLightMode = document.getElementById("toggle-darkMode");
darkLightMode.addEventListener("change", (e) => {
  if (e.target.value === "dark") {
    document.body.style.backgroundColor = "#231F20";
    document.body.style.color = "#00FF00";
  }
  if (e.target.value === "light") {
    document.body.style.backgroundColor = " #FFFFF7";
    document.body.style.color = "#231F20";
  }
});
