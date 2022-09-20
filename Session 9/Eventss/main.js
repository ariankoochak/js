
// dom selection
let divs = document.getElementsByTagName("div");
let counterDOM = document.querySelector("span.value")

let inputs = document.getElementsByTagName("input");


// functions
function AddCounter() {
    counterDOM.textContent = +counterDOM.textContent + 1;
}

// events
divs[0].addEventListener("click", AddCounter);
divs[1].addEventListener("dblclick", AddCounter);

for(let div of divs){
    div.addEventListener(div.innerHTML,AddCounter);
}

for(let input of inputs){
    input.addEventListener(input.getAttribute("placeholder"),AddCounter);
}