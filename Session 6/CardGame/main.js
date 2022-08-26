let Cards = document.getElementsByTagName("div");
let CountUp = document.getElementsByTagName("h3");
let Timer = 0;
let Min = 0;
let Move = 0;
function CheckTwoUpFunc(){
    let Flag = 0;
    for(let Card of Cards){
        if(Card.classList.contains("show"))
            Flag++;
        if(Flag == 2)
            return true;
    }
    return false;
}

function SituationFunc(one,two,sit){
    let Open = "open";
    switch(sit){
        case "YES":
            one.classList.add("win");
            two.classList.add("win");
            if (CheckToWin()){
                Open = "Null";
            }
            one.classList.add(Open);
            two.classList.add(Open);
            setTimeout(function(){
                one.classList.remove("open","show");
                two.classList.remove("open","show");
            },500);
            break;
        case "NO":
            one.classList.add("red");
            two.classList.add("red");
            setTimeout(function () {
                one.classList.remove("red","show");
                two.classList.remove("red","show");
            }, 500);
            break;
        default:
            console.log("Error in sit input");
    }
}

function CheckEqualFunc(){
    let Boxes = document.getElementsByClassName("show");
    if(Boxes[0].innerHTML == Boxes[1].innerHTML){
        SituationFunc(Boxes[0],Boxes[1],"YES");
    }
    else{
        SituationFunc(Boxes[0], Boxes[1], "NO");
    }
}

function CheckToWin(){
    let Flag = 0;
    for (let Card of Cards) {
        if (!Card.classList.contains("win"))
            return false;
    }
    return true;
}



function ShowCardFunc(){
    if (!this.classList.contains("show") && !CheckTwoUpFunc() && !this.classList.contains("win")){
        this.classList.add("show");
    }
    if(CheckTwoUpFunc()){
        Move++;
        CheckEqualFunc();
    }
    if(CheckToWin()){
         setTimeout(function(){
            if(Min == 0)
                alert("You Win!!! \n Your Record : "+ --Timer +" s" + "\nYour Move: " + Move );
            else
                alert("You Win!!! \n Your Record : " + Min + ":" + --Timer + " s" + "\nYour Move: " + Move);
         },1);
    }
}

function setTime(){
    let formater;
    if(Min == 0){
        if(Timer < 10)
            formater = "0" + Timer++ + " s<pre>";
        else
            formater = Timer++ + " s<pre>";
    }
    else{
        if (Timer < 10)
            formater = Min + " : " +  "0" + Timer++ + " s<pre>";
        else
            formater = Min + " : " + Timer++ + " s<pre>";
    }
    if (Timer == 60) {
        Timer = 0;
        Min++;
    }
    CountUp[0].innerHTML = formater;
}


function Reset() {
    alert("New Game");
    Timer = Min = Move = 0;
    for (let card of Cards) {
        card.classList.remove("win");
        card.classList.remove("show");
    }
    Dice();
}


function Dice() {
    for (let i = Cards.length - 1; i >= 0; i--) {
        let t = Math.floor(Math.random() * i);
        let k = Cards[i].innerHTML;
        Cards[i].innerHTML = Cards[t].innerHTML;
        Cards[t].innerHTML = k;
    }
}
Dice();

setInterval(setTime, 1000);
for(let Card of Cards){
    Card.onclick = ShowCardFunc;
}