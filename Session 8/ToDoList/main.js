let works = []
document.getElementById("submit").onclick = function(){
    let input = document.querySelectorAll("input");
    let newWork = {
        id : works.length + 1,
        title : input[0].value,
        details : input[1].value
    }
    works.push(newWork);
    document.getElementById("list").innerHTML = "";
    for(let work of works){
        let template = `
        <div class = "${work.id}">
            <h3>${work.title}</h3>
            <p>${work.details}</p>
            <button class = "${work.id}" onclick = "doneButton(${work.id})">Done</button>
            <button class ="${work.id}"  onclick = "removeButton(${work.id})">Delete</button>
        </div>`;
        document.getElementById("list").innerHTML += template;
    }
    input[0].value = input[1].value = "";
}
function doneButton(id){
    let selectId = document.getElementsByClassName(`${id}`);
    selectId[0].classList.add("done");
}

function removeButton(id) {
    let selectId = document.getElementsByClassName(`${id}`);
    selectId[0].remove();
    works.splice(id-1,1);
}