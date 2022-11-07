let works = [];
if(getFromLocalStorage())
    works = getFromLocalStorage();
let counterId = localStorage.getItem("counter") || 0;
let btn = $("button");


function updateToLocalStorage(){
    localStorage.setItem("counter",counterId);
    localStorage.setItem("works",JSON.stringify(works));
}

function getFromLocalStorage(){
    return JSON.parse(localStorage.getItem("works"));
}

function pushToArray(){
    let prepareOBJ = {
        id : counterId++,
        title : $("#title").val(),
        body : $("#note").val(),
        situation : 0
    }
    works.push(prepareOBJ);
    updateToLocalStorage();
    render();
}



$("#submit").on("click",pushToArray);
