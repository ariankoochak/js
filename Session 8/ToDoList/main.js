let works = [];
let counterId = 0;


function PrintAll() {
    let itemsNum = document.getElementsByTagName("p");
    if (works.length > 0)
        itemsNum[0].textContent = `${works.length} items`;
    else
        itemsNum[0].textContent = "";
    document.getElementById("list").innerHTML = "";
    for (let work of works) {
        printWork(work);
    }
}

function addToArray() {
    let input = document.querySelectorAll("input");
    let title = input[0].value;
    let detail = input[1].value;
    if(title != ""){
        let newWork = {
            id: counterId,
            title: title,
            detail: detail,
            done: false
        }
        counterId++;
        works.push(newWork);
        PrintAll();
        input[0].value = input[1].value = "";
    }
}

function printWork(work) {
    let list = document.getElementById("list");
    let template;
    if (work.done == false) {
        template = `       
        <div class = "${work.id} work">
            <h2>${work.title}</h2>
            <h4>${work.detail}</h4>
            <button onclick="doneProcces(${work.id})" class="${work.id}">done</button>
            <button onclick="deleteWork(${work.id})" class="${work.id}">delete</button>
        </div>`;
    }
    else {
        template = `       
        <div class = "${work.id} work done">
            <h2 >${work.title}</h2>
            <h4>${work.detail}</h4>
            <button onclick="resetProcces(${work.id})" class="${work.id}">reset</button>
            <button onclick="deleteWork(${work.id})" class="${work.id}">delete</button>
        </div>`;
    }
    list.innerHTML += template;
}

function doneProcces(id) {
    for (let work of works) {
        if (work.id == id) {
            work.done = true;
            break;
        }
    }
    PrintAll();
}

function deleteWork(id) {
    for (let i = 0; i < works.length; i++) {
        if (works[i].id == id) {
            works.splice(i, 1);
            break;
        }
    }
    PrintAll();
}

function resetProcces(id) {
    for (let work of works) {
        if (work.id == id) {
            work.done = false;
            break;
        }
    }
    PrintAll();
}