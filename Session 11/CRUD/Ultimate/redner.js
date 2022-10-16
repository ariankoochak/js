let table = document.getElementById("root");
function render(dataBase,PageNum){
    let counter = PageNum*pageLayout - pageLayout + 1;
    pageMaker(dataBase);
    let arr = LayoutMaker(dataBase,PageNum);
    let template = arr.map(function(std,index){
        const { id, name, age, email, course } = std;
        return `
            <tr>
                <td>${counter++}</td>
                <td>${name}</td>
                <td>${email}</td>
                <td>${age}</td>
                <td>${course}</td>
                <td>
                    <button class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#edit-modal" onclick="editDataBase(${id})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick ="deleteFromDataBase(${id})">Delete</button>
                </td>
            </tr>
        `;
    }).join("");
    table.innerHTML = template;
}

/////////////////////
render(STUDENTS,1);