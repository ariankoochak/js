function deleteInputContent(clientOrAdmin){
    switch(clientOrAdmin){
        case "admin":
            document.getElementById("admin__login__username").value = '';
            document.getElementById("admin__login__password").value = '';
            break;
        case "client":
            document.getElementById("client__login__username").value = '';
            document.getElementById("client__login__password").value = '';
            break;
    }
}

$("#admin__submit").on("click",()=>{
    let userName = $("#admin__login__username").val();
    let passWord = $("#admin__login__password").val();
    if(userName === "Arayesh" && passWord === "4321")
        window.location.href = "../Admin Panel/index.html";
    else{
        deleteInputContent("admin");
        $("p").show();
    }
});
$("#client__submit").on("click", () => {
    let userName = $("#client__login__username").val();
    let passWord = $("#client__login__password").val();
    if (userName === "Arian" && passWord === "1234")
        window.location.href = "../Client panel/index.html";
    else{
        deleteInputContent("client");
        $("p").show();
    }
});

$("#change-login-client").on("click",()=>{
    $("p").hide();
    deleteInputContent("client");
    $("#admin").show();
    $("#client").hide();
    $("#login-image").attr("src","../images/admin-login-image.jpg");
})
$("#change-login-admin").on("click", () => {
    $("p").hide();
    deleteInputContent("admin");
    $("#client").show();
    $("#admin").hide();
    $("#login-image").attr("src","../images/client-login-image.jpg");
})