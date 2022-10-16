let selectedStundet = {
    fullName: document.getElementById("edit-name"),
    email: document.getElementById("edit-email"),
    age: document.getElementById("edit-age"),
    course: document.getElementById("edit-course")
}
let editBtn = document.getElementById("edit-btn");
let closeEditBtn = document.getElementById("close-edit-modal");
let editId = 0;
function editDataBase(id){
    editId = id;
    let editStudent = STUDENTS.find(function(std){
        return std.id == id;
    });
    const {fullName , email , age , course} = selectedStundet;
    fullName.value = editStudent.name;
    email.value = editStudent.email;
    age.value = editStudent.age;
    course.value = editStudent.course;
}

function applyEdit(){
    STUDENTS.map(function (std) {
        if(std.id == editId){
            std.name = selectedStundet.fullName.value;
            std.email = selectedStundet.email.value;
            std.age = selectedStundet.age.value;
            std.course = selectedStundet.course.value;
        }
    });
    render(STUDENTS,nowPage);
    closeEditBtn.click();
}



editBtn.addEventListener("click",applyEdit);