let Supra = document.getElementById("supra");
let R35 = document.querySelector("img:nth-of-type(2)");
let R34 = document.querySelector("img:nth-of-type(3)");
let Lancer = document.querySelector("img:nth-of-type(4)");
let Rx7 = document.querySelector("img:nth-of-type(5)");

let Prev = Supra;
function DeleteAllBorder(){
    Supra.classList.remove("selection");
    R35.classList.remove("selection");
    R34.classList.remove("selection");
    Lancer.classList.remove("selection");
    Rx7.classList.remove("selection");
}
function BigFunc(Elem,Name){
    DeleteAllBorder();
    Prev.classList.remove("selection");
    document.getElementById("name").textContent = Name;
    let NewSrc = Elem.getAttribute("src");
    Elem.setAttribute("class", "selection");
    let big = document.getElementById("big");
    big.setAttribute("src", NewSrc);
    Prev = Elem;
}

Supra.onclick = function() {
    BigFunc(Supra,"Supra Mk4");
}
R35.onclick = function () {
    BigFunc(R35, "R35");
}
R34.onclick = function () {
    BigFunc(R34, "R34");
}
Lancer.onclick = function () {
    BigFunc(Lancer, "Lancer");
}
Rx7.onclick = function () {
    BigFunc(Rx7, "Rx7");
}