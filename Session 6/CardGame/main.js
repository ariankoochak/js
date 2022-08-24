let Cards = document.querySelectorAll("div");
let counter = 0;
function Dice(){
    for(let i = Cards.length-1;i >= 0;i--){
            let t = Math.floor(Math.random() * i);
            let k = Cards[i].innerHTML;
            Cards[i].innerHTML = Cards[t].innerHTML;
            Cards[t].innerHTML = k;
    }
}

function CheckWin(){
    for(let i = 0;i < Cards.length;i++){
        if (!Cards[i].getAttribute("class")){
            return false;
        }
    }
    return true;
}

function ShowCard(){
    if(counter < 2){
        if(!this.getAttribute("class")){
            this.classList.add("show");
            counter++;
        }
    }
    let CheckTwice = document.getElementsByClassName("show");
    if(counter == 2){
        if (CheckTwice[0].innerHTML == CheckTwice[1].innerHTML){
            for(let i = 0;i< 2;i++){
                CheckTwice[i].classList.add("win","open");
            }
            setTimeout(function () {
                CheckTwice[1].classList.remove("open");
                CheckTwice[1].classList.remove("show");
                CheckTwice[0].classList.remove("open");
                CheckTwice[0].classList.remove("show");
                counter = 0;
            }, 500);
        }
        else{
            CheckTwice[0].classList.add("red");
            CheckTwice[1].classList.add("red");
            setTimeout(function () {
                CheckTwice[1].classList.remove("red");
                CheckTwice[1].classList.remove("show");
                CheckTwice[0].classList.remove("red");
                CheckTwice[0].classList.remove("show");
                counter = 0;
            },500);
        }
    }
    if(CheckWin()){
        CheckTwice[1].classList.remove("open");
        CheckTwice[0].classList.remove("open");
        setTimeout(function () {
            alert("You Win!!");
        }, 0);
    }
}

function Reset(){
    counter = 0;
    for(let card of Cards){
        card.classList.remove("win");
    }
    Dice();
}

Dice();
for(let Card of Cards){
    Card.onclick = ShowCard;
}