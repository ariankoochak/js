function NumberGenerator() {
    return String(Math.floor(Math.random() * 10));
}

function AlphaGenerator() {
    let c = Math.floor(Math.random() * 26);
    c += 97;
    return String.fromCharCode(c);
}

function BigAlphaGenerator() {
    let c = Math.floor(Math.random() * 26);
    c += 65;
    return String.fromCharCode(c);
}

function Dice(){
    let Dice = Math.floor(Math.random() * 3);
    switch (Dice) {
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

function SetPassword(){
    let Password = "";
    for(let i = 0;i < 8;i++){
        Password += Dice();
    }
    return Password;
}

console.log(SetPassword());