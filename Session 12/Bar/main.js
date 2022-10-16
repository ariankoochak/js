function barissta(myList){
    myList = myList.sort(function(a,b){return a - b});
    let sum = 0;
    for(let i = 0;i < myList.length;i++){
        if(i != 0)
            myList[i] += myList[i - 1] + 2;
        sum += myList[i];
    }
    console.log(sum);
}

barissta([4,3,2]);