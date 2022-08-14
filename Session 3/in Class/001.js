// function OptGenerator() {
//     let full = "";
//     for (let i = 0; i < 8; i++) {
//         let c = Math.floor(Math.random() * 100);
//         c = Math.round(c/4);
//         c += 97;
//         full += String.fromCharCode(c);
//     }
//     console.log(full);
// }


function OptGenerator(){
    let full = "";
    for(let i = 0;i < 8;i++){
        let c = Math.floor(Math.random() * 26);
        c += 97;
        full += String.fromCharCode(c);
    }
    console.log(full);
}

OptGenerator();



