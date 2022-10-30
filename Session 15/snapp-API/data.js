let drink = [];
let junk = [];
let req = new XMLHttpRequest;
req.open("GET","https://core.snapp.market/api/v1/vendors/0r5ryz/main?platform=WEB&appVersion=2.0.0");
req.send();
req.addEventListener("load",() => {
    document.getElementById("Loading").style.display = "none";
    let data = JSON.parse(req.response).items;
    for(item of data){
        if(item.type === "category"){
            render(item);
        }
    }
})
