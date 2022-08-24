let Name = ["Kremlin,Moscow",
 "Azadi,Tehran",
  "Chernobyl,Pripyat",
  "Brandenburg Gate,Berlin",
  "Milad Tower,Tehran",
  "Karoon River,Ahwaz"];
let Dice = Math.floor(Math.random() * 6) + 1;
let BackSRC = "background-image: url('" + Dice + ".png');";
document.body.setAttribute("style",BackSRC);
document.getElementsByTagName("h2")[0].textContent = Name[Dice-1];