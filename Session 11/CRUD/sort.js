let nameSort = document.getElementById("name-sort");
let emailSort = document.getElementById("email-sort");
let ageSort = document.getElementById("age-sort");
let courseSort = document.getElementById("course-sort");

function ageSorting(){
    nameSort.innerHTML = "Full Name";
    emailSort.innerHTML = "Email";
    courseSort.innerHTML = "course";
    STUDENTSSORT = STUDENTS.map(function(std){
        return std;
    });
    if (ageSort.innerHTML == "↑Age"){
        ageSort.innerHTML = "Age";
        render(STUDENTS, 1);
    }
    else if (ageSort.innerHTML == "↓Age"){
        STUDENTSSORT = STUDENTSSORT.sort(function (a, b) {
            return a.age - b.age;
        });
        ageSort.innerHTML = "↑Age";
        render(STUDENTSSORT, 1);
    }
    else {
        STUDENTSSORT = STUDENTSSORT.sort(function (a, b) {
            return b.age - a.age;
        });
        ageSort.innerHTML = "↓Age";
        render(STUDENTSSORT, 1);
    }
}
function nameSorting(){
    ageSort.innerHTML = "Age";
    emailSort.innerHTML = "Email";
    courseSort.innerHTML = "course";
    STUDENTSSORT = STUDENTS.map(function (std) {
        return std;
    });
    if (nameSort.innerHTML == "↑Full Name"){
        nameSort.innerHTML = "Full Name";
        render(STUDENTS, 1);
    }
    else if (nameSort.innerHTML == "↓Full Name"){
        STUDENTSSORT = STUDENTSSORT.sort(function (a, b) {
            return b.name.localeCompare(a.name);
        });
        nameSort.innerHTML = "↑Full Name";
        render(STUDENTSSORT, 1);
    }
    else{
        STUDENTSSORT = STUDENTSSORT.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
        nameSort.innerHTML = "↓Full Name";
        render(STUDENTSSORT,1);
    }
}

function emailSorting(){
    nameSort.innerHTML = "Full Name";
    ageSort.innerHTML = "Age";
    courseSort.innerHTML = "course";
    STUDENTSSORT = STUDENTS.map(function (std) {
        return std;
    });
    if (emailSort.innerHTML == "↑Email") {
        emailSort.innerHTML = "Email";
        render(STUDENTS, 1);
    }
    else if (emailSort.innerHTML == "↓Email") {
        STUDENTSSORT = STUDENTSSORT.sort(function (a, b) {
            return b.email.localeCompare(a.email);
        });
        emailSort.innerHTML = "↑Email";
        render(STUDENTSSORT, 1);
    }
    else {
        STUDENTSSORT = STUDENTSSORT.sort(function (a, b) {
            return a.email.localeCompare(b.email);
        });
        emailSort.innerHTML = "↓Email";
        render(STUDENTSSORT, 1);
    }
}

function courseSorting() {
    nameSort.innerHTML = "Full Name";
    emailSort.innerHTML = "Email";
    ageSort.innerHTML = "Age";
    STUDENTSSORT = STUDENTS.map(function (std) {
        return std;
    });
    if (courseSort.innerHTML == "↑Course") {
        courseSort.innerHTML = "Course";
        render(STUDENTS, 1);
    }
    else if (courseSort.innerHTML == "↓Course") {
        STUDENTSSORT = STUDENTSSORT.sort(function (a, b) {
            return b.course.localeCompare(a.course);
        });
        courseSort.innerHTML = "↑Course";
        render(STUDENTSSORT, 1);
    }
    else {
        STUDENTSSORT = STUDENTSSORT.sort(function (a, b) {
            return a.course.localeCompare(b.course);
        });
        courseSort.innerHTML = "↓Course";
        render(STUDENTSSORT, 1);
    }
}

courseSort.addEventListener("click",courseSorting);
emailSort.addEventListener("click",emailSorting);
nameSort.addEventListener("click",nameSorting);
ageSort.addEventListener("click",ageSorting);