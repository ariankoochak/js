let DATAS = [];

let req = new XMLHttpRequest;
req.open("GET","https://jsonplaceholder.ir/posts");
req.send();
req.addEventListener("load",function(){
    DATAS = JSON.parse(req.response);
    render();
});
