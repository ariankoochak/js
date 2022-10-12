

// DOM NODES
let root = document.getElementById("root");
const inputElements = {
    name: document.getElementById("name"),
    age: document.getElementById("age"),
    email: document.getElementById("email"),
    course: document.getElementById("course"),
}
let closeBtn = document.getElementById("close-modal");
let id = 3;
let addBtn = document.getElementById("add-btn");


// intial methods
render();





// EVENTS
addBtn.addEventListener("click", addStudent)

const {name ,email,age,course} = inputElements;
name.addEventListener("keypress",enterKeyEvent);
email.addEventListener("keypress", enterKeyEvent);
age.addEventListener("keypress", enterKeyEvent);
course.addEventListener("keypress", enterKeyEvent);
