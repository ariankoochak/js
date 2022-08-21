let Counter = document.querySelector("h2");
let AddBtn = document.querySelector("button:nth-of-type(1)");
let MinBtn = document.querySelector("Button:nth-of-type(2)");
let AWO = document.querySelector("Button:nth-of-type(3)");

function AddFunc(){
    let Num = +Counter.textContent;
    Num++;
    Counter.textContent = Num;
}

function MinFunc() {
    let Num = +Counter.textContent;
    Num--;
    Counter.textContent = Num;
}

function AddWhenOddFunc() {
    let Num = +Counter.textContent;
    if(Num%2)
        Num++;
    Counter.textContent = Num;
}

AddBtn.onclick = AddFunc;
MinBtn.onclick = MinFunc;
AWO.onclick = AddWhenOddFunc;