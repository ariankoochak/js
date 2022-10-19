let search = {
    fullName: document.getElementById("search-name"),
    email: document.getElementById("search-email"),
    age: document.getElementById("search-age"),
    course: document.getElementById("search-course")
};

let searchBtn = document.getElementById("search-btn");
let closeSearchBtn = document.getElementById("close-search-modal");
let deleteSearchBtn = document.getElementById("delete-search");

function filterDataBase(){
    const { fullName, email, age, course } = search;
    if(fullName.value || email.value || age.value || course.value){
        STUDENTSFILTER = STUDENTS.filter(function(std){
            return (std.name == fullName.value || fullName.value == "") && (std.email == email.value || email.value == "") && (std.age == age.value || age.value == "") && (std.course == course.value || course.value == "")
        });
        deleteSearchBtn.style.display = "inline-Block";
        render(STUDENTSFILTER,1);
        fullName.value = email.value = age.value = course.value = "";
        closeSearchBtn.click();
    }
    else{
        alert("please insert Something");
    }
}

function deleteFilter(){
    deleteSearchBtn.style.display = "none";
    render(STUDENTS,1);
    closeSearchBtn.click();
}

deleteSearchBtn.addEventListener("click",deleteFilter);
searchBtn.addEventListener("click",filterDataBase);