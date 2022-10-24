let DATAS = [];
let USERS = [];
let req = new XMLHttpRequest;
req.open("GET","https://jsonplaceholder.ir/posts");
req.send();
req.addEventListener("load",function(){
    DATAS = JSON.parse(req.response);
});

let userReq = new XMLHttpRequest;
userReq.open("GET","https://jsonplaceholder.ir/users");
userReq.send();
userReq.addEventListener("load",function(){
    USERS = JSON.parse(userReq.response);
    render();
});
