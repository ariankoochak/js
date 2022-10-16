let search = {
    fullName: document.getElementById("search-name"),
    email: document.getElementById("search-email"),
    age: document.getElementById("search-age"),
    course: document.getElementById("search-course")
};

let searchBtn = document.getElementById("search-btn");
let closeSearchBtn = document.getElementById("close-search-modal");

function filterDataBase(){
    const { fullName, email, age, course } = search;
    STUDENTSFILTER = STUDENTS.filter(function(std){
        return (std.name == fullName.value || fullName.value == "") && (std.email == email.value || email.value == "") && (std.age == age.value || age.value == "") && (std.course == course.value || course.value == "")
    });
    render(STUDENTSFILTER,1);
    closeSearchBtn.click();
}

searchBtn.addEventListener("click",filterDataBase);