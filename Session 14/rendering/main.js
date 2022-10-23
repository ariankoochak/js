let root = document.getElementById("root");

function render(){
    let template = DATAS.map(function(data){
        const{userId,id,title,body} = data;
        return `
        <div>
            <h2>${id}.${title}</h2>
            <p>${body}</p>
            <h6>${userId}</h6>
        </div>
        `;
    }).join("");
    root.innerHTML = template;
}

render();