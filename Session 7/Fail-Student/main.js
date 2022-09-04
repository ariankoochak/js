let scores = [10,14,5,17,18];
let cond = "No";
for(let score of scores){
    if(score < 10){
        cond = "Yes";
        break;
    }
}
console.log(cond);