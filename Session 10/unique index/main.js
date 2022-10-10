let arr = [1,1,1,1,1,2,1,1,1];
for(let ind of arr){
    if(arr.indexOf(ind) == arr.lastIndexOf(ind)){
        console.log(ind);
        break;
    }
}