function otp_generator() {
    let full_opt = "";
    for (let i = 0; i < 8; i++) {
        let j = Math.floor(Math.random() * 10);
        full_opt += j;
    }
    return +full_opt;
}
console.log(otp_generator());