function ChangeImageFunc(){
    let img1 = document.getElementById("fall");
    let img2 = document.getElementById("summer");
    let link = img1.getAttribute("src");
    img1.setAttribute("src",img2.getAttribute("src"));
    img2.setAttribute("src",link);
}