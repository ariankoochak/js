let drink = [];
let junk = [];
let req = new XMLHttpRequest;
req.open("GET","https://core.snapp.market/api/v1/vendors/0r5ryz/main?platform=WEB&appVersion=2.0.0");
req.send();
req.addEventListener("load",() => {
    let data = JSON.parse(req.response).items;
    console.log(data);
    // drink = data.find((ind)=>{
    //     return ind.id === 278347;
    // });
    // junk = data.find((ind)=>{
    //     return ind.id === 278348;
    // });
    // render(drink,"drink");
    // render(junk,"junk");
    for(item of data){
        if(item.type === "category"){
            render(item);
        }
    }
})
