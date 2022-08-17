function DeleteAllBorder(){
    let Supra = document.getElementById("supra");
    let R35 = document.getElementById("r35");
    let R34 = document.getElementById("r34");
    let Lancer = document.getElementById("lancer");
    let Rx7 = document.getElementById("rx7");
    Supra.classList.remove("selection");
    R35.classList.remove("selection");
    R34.classList.remove("selection");
    Lancer.classList.remove("selection");
    Rx7.classList.remove("selection");
}
function SupraFunc(){
    DeleteAllBorder();
    document.getElementById("name").innerHTML = "Toyota Supra mk4";
    let Source = document.getElementById("supra");
    let big = document.getElementById("big");
    let NewSrc = Source.getAttribute("src");
    Source.setAttribute("class","selection");
    big.setAttribute("src",NewSrc);
}

function R35Func(){
    DeleteAllBorder();
    document.getElementById("name").innerHTML = "Nissan Skyline GTR R35";
    let Source = document.getElementById("r35");
    let big = document.getElementById("big");
    Source.setAttribute("class", "selection");
    big.setAttribute("src", Source.getAttribute("src"));
}

function R34Func(){
    DeleteAllBorder();
    document.getElementById("name").innerHTML = "Nissan Skyline GTR R34";
    let Source = document.getElementById("r34");
    let big = document.getElementById("big");
    Source.setAttribute("class", "selection");
    big.setAttribute("src", Source.getAttribute("src"));
}

function LancerFunc(){
    DeleteAllBorder();
    document.getElementById("name").innerHTML = "Mitsubishi Lancer Evo 9";
    let Source = document.getElementById("lancer");
    let big = document.getElementById("big");
    Source.setAttribute("class", "selection");
    big.setAttribute("src", Source.getAttribute("src"));
}

function Rx7Func(){
    DeleteAllBorder();
    document.getElementById("name").innerHTML = "Mazda RX7";
    let Source = document.getElementById("rx7");
    let big = document.getElementById("big");
    Source.setAttribute("class", "selection");
    big.setAttribute("src", Source.getAttribute("src"));

}