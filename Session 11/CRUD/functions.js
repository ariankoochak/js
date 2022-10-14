function render(page,arr) {
    let template = arr.map(function (std, index) {
        const { id, name, age, email, course } = std
        if(index+1 > page-10 && index+1 <= page){
        return `
            <tr>
                <td>${index+1}</td>
                <td>${name}</td>
                <td>${email}</td>
                <td>${age}</td>
                <td>${course}</td>
                <td>
                    <button class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#edit-modal" onclick="prepareForEdit(${id})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="DeleteStudent(${id})">Delete</button>
                </td>
            </tr>
        `}
    }).join("");
    root.innerHTML = template;
    currentPage = page;
    lastPage = Math.ceil(arr.length / 10)*10;
    generatePagination();
}

function GenerateId() {
    return id++
}

function addStudent() {
    const { name, email, age, course } = inputElements;
    let std = {
        name: name.value,
        email: email.value,
        age: age.value,
        course: course.value,
        id: GenerateId()
    };
    STUDENTS.push(std);
    if((STUDENTS.length-1)%10 == 0)
        render(((lastPage / 10) + 1) * 10, STUDENTS);
    else
        render(lastPage, STUDENTS);
    name.value = email.value = age.value = course.value = "";
    closeBtn.click();
}

function DeleteStudent(studentId) {
    let DeletedStudent = STUDENTS.find(function(std){
        return std.id === studentId
    })
    let index = STUDENTS.findIndex(function(std) {
        return std.id === studentId
    })
    STUDENTS.splice(index,1);
    render(currentPage, STUDENTS);
}

function enterKeyEvent(e){
    if(e.keyCode === 13)
        addStudent();
}

function prepareForEdit(id){
    let inp = STUDENTS.find(function(ind){
        return ind.id === id;
    });
    editElements.name.value = inp.name;
    editElements.age.value = inp.age;
    editElements.email.value = inp.email;
    editElements.course.value = inp.course;
    editId = inp.id;
}

function editStudent(){
    let editInp = STUDENTS.find(function (ind) {
        return ind.id === editId;
    });
    editInp.name = editElements.name.value;
    editInp.age = editElements.age.value;
    editInp.email = editElements.email.value;
    editInp.course = editElements.course.value;
    render(currentPage,STUDENTS);
    closeEditBtn.click();
}

function pagination(){
    let pageNum = +(this.innerHTML);
    pageNum = (pageNum*10);
    render(pageNum, STUDENTS);
}


function generatePagination(){
    paginationDom.innerHTML = `<li class="page-item"><a class="page-link" href="#" id="prev-page">Previous</a></li>`;
    for(let i = 1;i <= lastPage/10;i++){
        let template = `<li class="page-item"><a class="page-link pages" href="#">${i}</a></li>`;
        paginationDom.innerHTML += template;
    }
    paginationDom.innerHTML += `<li class="page-item" id="next-page"><a class="page-link" href="#">Next</a></li>`;
    for (let page of pages) {
        page.addEventListener("click", pagination);
    }
    let prev = document.getElementById("prev-page");
    let next = document.getElementById("next-page");
    prev.addEventListener("click",function(){
        if(currentPage != 10){
            let prevPage = (currentPage/10) - 1;
            render(prevPage * 10, STUDENTS);
        }
    })
    next.addEventListener("click",function(){
        if(currentPage != lastPage){
            let nextPage = (currentPage/10) + 1;
            render(nextPage * 10, STUDENTS);
        }
    });
}

function searchFilter(){
    STUDENTSFILTER = STUDENTS.filter(function(stu){
        return stu.name == searchElements.name.value;
    });
    render(10,STUDENTSFILTER);
    closeSearchBtn.click();
}


