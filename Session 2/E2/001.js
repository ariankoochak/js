let sum = 0
let i
while(true){
    i = +prompt("enter number")
    if(i != 0)
        sum += i
    else
        break
}
alert("sum : " + sum)