let Images = document.querySelectorAll("img");
let Name = ["Zero","Supra Mk4","Skyline R35","Skyline R34","Lancer Evo 9","Mazda Rx7"]
let Prev = Images[1];
function BigFunc(){
    if (this.getAttribute("id") != "big"){
        Images[0].setAttribute("src", this.getAttribute("src"));
        document.getElementById("name").textContent = Name[Name.indexOf(this)];
        Prev.classList.remove("selection");
        this.classList.add("selection");
        Prev = this;
    }
}
for(let Image of Images){
    Image.onclick = BigFunc;
}