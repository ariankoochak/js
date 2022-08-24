let Name = ["Kremlin,Moscow",
 "Azadi,Tehran",
  "Chernobyl,Pripyat",
  "Brandenburg Gate,Berlin",
  "Milad Tower,Tehran",
  "Karoon River,Ahwaz"];
let Dice = Math.floor(Math.random() * 6);
Dice++;
let BackSRC = "background-image: url('" + Dice + ".png');";
document.body.setAttribute("style",BackSRC);