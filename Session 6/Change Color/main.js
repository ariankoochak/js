let Boxes = document.querySelectorAll("div");
function ChangeColor(){
    if(!this.getAttribute("style")){
        let Red = Math.floor(Math.random() * 256);
        let Blue = Math.floor(Math.random() * 256);
        let Green = Math.floor(Math.random() * 256);
        this.setAttribute("style" ,"background : rgb(" + String(Red) + "," +String(Green)+","+String(Blue)+")");
    }
}

for (let Box of Boxes) {
    Box.onclick = ChangeColor;
}