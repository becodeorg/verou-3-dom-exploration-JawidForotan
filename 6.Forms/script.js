

const selectInput = document.querySelector("#firstname");
selectInput.addEventListener("keyup", () => {
  const inputValue = selectInput.value;
  const selectSpan = document.querySelector("#display-firstname");
  selectSpan.innerHTML = `First Name: ${inputValue}`;
});

const selectSecInput = document.querySelector("#age");
selectSecInput.addEventListener("keyup", () =>{
    const inputValue = selectSecInput.value;
    if(inputValue > 18){
      const selectSecToHide = document.querySelector("#a-hard-truth");
      selectSecToHide.style.visibility = "visible";
    }else{
         selectSecToHide.style.visibility = "hidden";
    }
})

