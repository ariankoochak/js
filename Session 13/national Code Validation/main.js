let inp = document.getElementById("inp");

function validation(){
    if (inp.value.length === 10) {
        if(inp.value.match(/[0-9]{10}/)){
            console.log(isNationalCode());
        }
    }
}

function isNationalCode(){
    if (inp.value.length == 10){
        let national = inp.value.split("").map(function (num, index) {
            if (index != 9)
                return num * (10 - index);
            else
                return +num;
        });
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += national[i];
        }
        sum = sum % 11;
        if (sum < 2) {
            if (sum === national[9])
                return true;
            else
                return false;
        }
        else {
            if ((11 - sum) === national[9])
                return true;
            else
                return false;
        }
    }
}

 
inp.addEventListener("keyup", validation);
