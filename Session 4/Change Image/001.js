let Images = document.querySelectorAll("img");
let Prev = Images[1];
function BigFunc(){
    if (this.getAttribute("id") != "big"){
        Images[0].setAttribute("src", this.getAttribute("src"));
        document.getElementById("name").innerHTML = this.getAttribute("alt");
        Prev.classList.remove("selection");
        this.classList.add("selection");
        Prev = this;
    }
}
for(let Image of Images){
    Image.onclick = BigFunc;
}