let divs = document.querySelectorAll("section div");
let domPrice = document.getElementById("price");
let fin = document.getElementById("finish");

let changeCounter = 1;
let price = 0;

function nextStep(nowStep){
    nowStep[0].classList.add("un-selected");
    nowStep[0].classList.remove("main");
    let nextStep = document.getElementsByClassName("un-selected");
    nextStep[changeCounter].classList.add("main");
    nextStep[changeCounter].classList.remove("un-selected");
    changeCounter++;
}

function priceCalculate(nowDom){
    let strPrice = nowDom[6].innerHTML;
    strPrice = strPrice.slice(0, strPrice.length - 1);
    price += Number(strPrice);
    domPrice.childNodes[1].innerHTML = price;
}
function clickEv(){
    let nowStep = document.getElementsByClassName("main");
    priceCalculate(this.childNodes);
    nextStep(nowStep);
    if(nowStep[0] == finish){
        document.getElementById("finPrice").innerHTML = price;
    }
}

for(let div of divs){
    div.addEventListener("click",clickEv);
}