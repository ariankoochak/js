
let header = document.querySelector("header");

let prevScroll = window.scrollY;
let reversCounter = 0;

function changeHeader() {
    if (window.scrollY > 200) {
        header.classList.add("changed");
    }
    if(window.scrollY < prevScroll){
        reversCounter++;
        if(reversCounter >= 10){
            console.log("fuk");
            header.classList.remove("changed");
        }
    }
    else{
        reversCounter = 0;
    }
    console.log(reversCounter);
    prevScroll = window.scrollY;
}








// evetn
window.addEventListener("scroll", changeHeader)