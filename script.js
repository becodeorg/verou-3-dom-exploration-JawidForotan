console.log(`title: ${document.title}`);
console.log(document.body);
document.title = "Modifying the DOM";
console.log(`new title: ${document.title}`);
document.body.style.backgroundColor = "#FF69B4";
console.log(`background: ${document.body.style.backgroundColor}`);
document.body.style.backgroundColor = "yellowGreen";
console.log(`new background ${document.body.style.backgroundColor}`);
console.log(document.body.children);
/*Loop through all children of the body*/
let c = document.body.children;
for(i = 0; i < c.length; i++){
    console.log(c[i]);
}
