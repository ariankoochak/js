let Password = "";
///////////////////////////////////////////////////////////////////////
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
    let dice = Math.floor(Math.random() * 3);
    switch (dice){
        case 0:
            return NumberGenerator();
        case 1:
            return AlphaGenerator();
        case 2:
            return BigAlphaGenerator();
        default:
            return NumberGenerator();
    }
}

/////////////////////////////////////////////////////////////////////////
function PassMaker(){
    for(let i = 0;i < 5;i++){
        Password += Dice();
    }
    Password += BigAlphaGenerator();
    Password += AlphaGenerator();
    Password += NumberGenerator();
    console.log("pass : " + Password);
    return Password;

}
function shuffle(pass){
    pass = pass.split("");
    for (let i = pass.length-1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let t = pass[i];
        pass[i] = pass[j];
        pass[j] = t;
    }
    return pass.join("");
}
function Mix(){
    console.log("Final : " + shuffle(PassMaker()));
}
Mix();