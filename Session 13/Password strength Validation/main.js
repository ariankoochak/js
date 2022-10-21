let password = document.getElementById("password");
let progressBar = document.getElementsByClassName("progress-bar");
let comment = document.querySelector("h3")
let errorComment = document.querySelector("h5");

function changeSit(sit,text){
    sit -= 1;
    for(let i = 0;i < progressBar.length;i++){
        if(i != sit)
            progressBar[i].style.display = "none";
    }
    progressBar[sit].style.display = "block";
    comment.textContent = text;
}

// function passValidation(){
//     let pass = password.value;
//     console.log(pass.length);
//     console.log(pass.match(/[A-Za-z0-9]{1,}/m));
//     if(pass.length > 0){
//         if (!pass.match(/[a-zA-Z0-9.-_$*()#@!%/]/)){
//             errorComment.textContent = `Please Use a-z A-Z 0-9 . - _ $ * ( ) # @ ! % /`;
//         }
//         else{
//             errorComment.textContent = "";
//             passChecker(pass);
//         }
//     }
//     else{
//         errorComment.textContent = "";
//     }
// }

function passChecker(pass){
    pass = password.value;
    if (pass.length > 10) {
        changeSit(5, "Strong");
    }
    else if(pass.length > 8){
        changeSit(4, "Good");
    }
    else if (pass.length > 6) {
        changeSit(3, "Not Bad");
    }
    else if (pass.length > 4) {
        changeSit(2, "Weak");
    }
    else{
        changeSit(1, "Very Weak");
    }
}



password.addEventListener("keyup",passChecker);