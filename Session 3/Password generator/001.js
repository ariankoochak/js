let Full = new Array(8);


function NumberGenerator(){
    return String(Math.floor(Math.random() * 10));
}

function AlphaGenerator(){
    let c = Math.floor(Math.random() * 26);
    c += 97;
    return String.fromCharCode(c);
}

function BigAlphaGenerator(){
    let c = Math.floor(Math.random() * 26);
    c += 65;
    return String.fromCharCode(c);
}

function DiceAndSet(){
    let Dice = Math.floor(Math.random() * 3);
    switch(Dice){
        case 0:
            return NumberGenerator();
            break;
        case 1:
            return AlphaGenerator();
            break;
        case 2:
            return BigAlphaGenerator();
            break;
        default:
            return AlphaGenerator();
            break;
    }
}

function ArrayGenerator(){
    Full[0] = NumberGenerator();
    Full[1] = NumberGenerator();
    Full[2] = AlphaGenerator();
    Full[3] = AlphaGenerator();
    Full[4] = BigAlphaGenerator();
    Full[5] = BigAlphaGenerator();
    Full[6] = DiceAndSet();
    Full[7] = DiceAndSet();
    for (let i = 7; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let t = Full[i];
        Full[i] = Full[j];
        Full[j] = t;
    }
}

function PasswordGenerator() {
    ArrayGenerator();
    let Password = "";
    for(let i = 0;i< 8;i++){
        Password += Full[i];
    }
    console.log(Password);
}


PasswordGenerator();