let xhos = ["x","x","o","o"];
let xCounter = 0;
let oCounter = 0;
for(let xo of xhos){
    if(xo == "x")
        xCounter++;
    else
        oCounter++;
}
if(xCounter == oCounter)
    console.log("Yes!");
else
    console.log("No!");