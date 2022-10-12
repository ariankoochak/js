function render() {
    let template = STUDENTS.map(function (std, index) {
        const { id, name, age, email, course } = std
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
        `
    }).join("");
    root.innerHTML = template
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
    render();
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
    render();
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
    render();
    closeEditBtn.click();
}