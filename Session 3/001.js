function OptGenerator(){
    let full = "";
    for(let i = 0;i < 8;i++){
        let a = Math.floor(Math.random() * 26);
        a += 97;
        full += String.fromCharCode(a);
    }
    console.log(full);
}

OptGenerator();

