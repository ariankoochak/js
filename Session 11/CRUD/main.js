

// DOM NODES
let root = document.getElementById("root");
const inputElements = {
    name: document.getElementById("name"),
    age: document.getElementById("age"),
    email: document.getElementById("email"),
    course: document.getElementById("course"),
}
const editElements ={
    name: document.getElementById("edit-name"),
    age: document.getElementById("edit-age"),
    email: document.getElementById("edit-email"),
    course: document.getElementById("edit-course"),
}
let closeBtn = document.getElementById("close-modal");
let closeEditBtn = document.getElementById("close-edit-modal");
let id = 3;
let addBtn = document.getElementById("add-btn");
let editBtn = document.getElementById("edit-btn");
let editId;

// intial methods
render();





// EVENTS
addBtn.addEventListener("click", addStudent);
editBtn.addEventListener("click",editStudent);

const {name ,email,age,course} = inputElements;
name.addEventListener("keypress",enterKeyEvent);
email.addEventListener("keypress", enterKeyEvent);
age.addEventListener("keypress", enterKeyEvent);
course.addEventListener("keypress", enterKeyEvent);
