let Boxes = document.querySelectorAll("div");
let flag = 0;

function CheckOver() {
    let flag = true;
    for (let i = 0; i < Boxes.length; i++) {
        if (!Boxes[i].getAttribute("style")) {
            flag = false;
        }
    }
    if (flag) {
        alert("game over");
    }
}

function MakeColor(){
    let Red = Math.floor(Math.random() * 256);
    let Blue = Math.floor(Math.random() * 256);
    let Green = Math.floor(Math.random() * 256);
    return "background : rgb(" + Red + "," + Green + "," + Blue + ")";
}

function ChangeColor(){
    if(!this.getAttribute("style")){
        this.setAttribute("style" , MakeColor());
        setTimeout(CheckOver,1);
    }
}

for (let Box of Boxes) {
    Box.onclick = ChangeColor;
}