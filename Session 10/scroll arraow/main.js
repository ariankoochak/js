function move(e){
    console.log(e);
    if(e.keyCode === 115)
        window.scrollTo(0,window.scrollY + 50);
    else if(e.keyCode === 119)
        window.scrollTo(0,window.scrollY - 50);
}
addEventListener("keypress",move);