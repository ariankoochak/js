let xhos = ["x","x","o","o"];
let xCounter = xhos.filter(function(xo){return xo == "x";});
let oCounter = xhos.filter(function (xo) { return xo == "o"; });
if(xCounter.length == oCounter.length)
    console.log("Yes!");
else
    console.log("No!");