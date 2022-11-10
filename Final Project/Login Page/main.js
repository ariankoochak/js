$("#admin__submit").on("click",()=>{
    let userName = $("#admin__login__username").val();
    let passWord = $("#admin__login__password").val();
    if(userName === "Arayesh" && passWord === "4321")
        window.location.href = "../Admin Panel/index.html";
    else
        alert("نام کاربری یا رمز عبور اشتباه است!")
});
$("#client__submit").on("click", () => {
    let userName = $("#client__login__username").val();
    let passWord = $("#client__login__password").val();
    if (userName === "Arian" && passWord === "1234")
        window.location.href = "../Client panel/index.html";
    else
        alert("نام کاربری یا رمز عبور اشتباه است!")
});

$("#change-login-client").on("click",()=>{
    $("#admin").show();
    $("#client").hide();
})
$("#change-login-admin").on("click", () => {
    $("#client").show();
    $("#admin").hide();
})