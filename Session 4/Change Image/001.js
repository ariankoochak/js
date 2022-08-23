let Images = document.querySelectorAll("img");
function BigFunc(){
    let RemSelc = document.getElementsByClassName("selection");
    RemSelc[0].classList.remove("selection");
    Images[0].setAttribute("src", this.getAttribute("src"));
    document.getElementById("name").textContent = this.getAttribute("alt");
    this.classList.add("selection");
}
for(let Image of Images){
    Image.onclick = BigFunc;
}