function unusedDigit(...args){
    let nums = "1234567890".split("");
    args = args.join("");
    args = args.split("");
    let exp = nums.filter(function(num){
        return !args.includes(num);
    }).join("");
    return exp;
}

console.log(unUsedDigit(12, 34, 56, 78));