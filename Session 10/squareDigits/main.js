function squareDigits(num){
    num = String(num);
    num = num.split("");
    let exp = "";
    for(let b of num){
        exp +=  String(Math.pow(Number(b),2));
    }
    return exp;
}
squareDigits(123);