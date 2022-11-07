render();
function render(){
    let template = works.map(work=>{
        return `
        <div class = "${work.id} work ${(work.situation === 1) ? 'done' : ''}">
        <h2>${work.title}</h2>
        <h4>${work.body}</h4>
        <button onclick="changeSit(${work.id})" class="${work.id}">${(work.situation === 1) ? 'reset' : 'done'}</button>
        <button onclick="deleteWork(${work.id})" class="${work.id}">delete</button>
        </div>`;
    }).join("");
    $("#list").html(template);
}

function changeSit(id){
    let btn = document.getElementsByClassName(`${id}`)[1];
    works.forEach(work =>{
        if(id == work.id){
            switch (work.situation){
                case 0 :
                    work.situation = 1;
                    break;
                case 1 :
                    work.situation = 0;
                    break;
            }
        }
    })
    updateToLocalStorage();
    render();
}

function deleteWork(id){
    let deletework = works.find(work =>{
        return work.id == id;
    })
    works.splice(works.indexOf(deletework),1);
    render();
}