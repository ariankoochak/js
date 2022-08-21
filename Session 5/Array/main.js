let Gift = ["laptop","Phone","Watch","Car","PC","PS5","Xbox Series X"];
function DiceFunc(){
    alert("You Win : " + Gift[Math.floor(Math.random() * (Gift.length))]);
}
document.querySelector("button").onclick = DiceFunc;