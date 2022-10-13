function squareDigits(num){
    num = String(num);
    num = num.split("");
    let exp = num.map(function(b){
        return b**2;
    })
    exp = exp.join("");
    console.log(exp);
}
squareDigits(123);