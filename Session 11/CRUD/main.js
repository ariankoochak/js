

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
const searchElements = {
    name: document.getElementById("search-name"),
    age: document.getElementById("search-age"),
    email: document.getElementById("search-email"),
    course: document.getElementById("search-course"),
}
let closeBtn = document.getElementById("close-modal");
let closeEditBtn = document.getElementById("close-edit-modal");
let id = 1;
let addBtn = document.getElementById("add-btn");
let editBtn = document.getElementById("edit-btn");
let editId;
let pages = document.getElementsByClassName("pages");
let lastPage;
let currentPage;
let paginationDom = document.getElementById("pagination");
let searchBtn = document.getElementById("search-btn");
let closeSearchBtn = document.getElementById("close-search-modal");
// intial methods
render(10, STUDENTS);
// EVENTS
addBtn.addEventListener("click", addStudent);
editBtn.addEventListener("click",editStudent);
searchBtn.addEventListener("click",searchFilter);

const {name ,email,age,course} = inputElements;
name.addEventListener("keypress",enterKeyEvent);
email.addEventListener("keypress", enterKeyEvent);
age.addEventListener("keypress", enterKeyEvent);
course.addEventListener("keypress", enterKeyEvent);
