let Boxes = document.querySelectorAll("div");
function MakeColor(){
    let Red = Math.floor(Math.random() * 256);
    let Blue = Math.floor(Math.random() * 256);
    let Green = Math.floor(Math.random() * 256);
    return "background : rgb(" + Red + "," + Green + "," + Blue + ")";
}

function ChangeColor(){
    if(!this.getAttribute("style")){
        this.setAttribute("style" , MakeColor());
    }
}

for (let Box of Boxes) {
    Box.onclick = ChangeColor;
}