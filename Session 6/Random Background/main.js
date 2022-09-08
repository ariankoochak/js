let Name = ["Kremlin,Moscow",
 "Azadi,Tehran",
  "Chernobyl,Pripyat",
  "Brandenburg Gate,Berlin",
  "Milad Tower,Tehran",
  "Karoon River,Ahwaz"];

let backs = [
  {
    placeName : "Kremlin",
    cityName : "Moscow",
    imgSrc : "./images/1.png"
  },
  {
    placeName: "Azadi",
    cityName: "Tehran",
    imgSrc: "./images/2.png"
  },
  {
    placeName: "Chernobyl",
    cityName: "Pripyat",
    imgSrc: "./images/3.png"
  },
  {
    placeName: "Brandenburg Gate",
    cityName: "Berlin",
    imgSrc: "./images/4.png"
  },
  {
    placeName: "milad Tower",
    cityName: "Tehran",
    imgSrc: "./images/5.png"
  },
  {
    placeName: "Karoon River",
    cityName: "Ahwaz",
    imgSrc: "./images/6.png"
  }
]
let Dice = Math.floor(Math.random() * backs.length);
document.body.setAttribute("style", "background-image: url('" + backs[Dice].imgSrc + "');");
document.getElementsByTagName("h3")[0].textContent = backs[Dice].cityName;
document.getElementsByTagName("h2")[0].textContent = backs[Dice].placeName;