let input = {
    fullName : document.getElementById("add-name"),
    email: document.getElementById("add-email"),
    age : document.getElementById("add-age"),
    course : document.getElementById("add-course")
};
let studentId = 18;
let addBtn = document.getElementById("add-btn");
let closeBtn = document.getElementById("close-modal");

function addToDataBase(){
    const {fullName , email , age , course} = input;
    let std = {
        id : studentId++,
        name : fullName.value,
        email : email.value,
        age : age.value,
        course : course.value,
    }
    STUDENTS.push(std);
    render(STUDENTS);
    fullName.value = email.value = age.value = course.value = "";
    closeBtn.click();
}

addBtn.addEventListener("click",addToDataBase);