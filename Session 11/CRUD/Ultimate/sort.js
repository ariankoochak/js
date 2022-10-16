let nameSort = document.getElementById("name-sort");
let emailSort = document.getElementById("email-sort");
let ageSort = document.getElementById("age-sort");
let courseSort = document.getElementById("course-sort");

function ageSorting(){
    STUDENTSSORT = STUDENTS.map(function(std){
        return std;
    });
    if (ageSort.innerHTML == "↑Age"){
        STUDENTSSORT = STUDENTSSORT.sort(function (a, b) {
            return b.age - a.age;
        });
        ageSort.innerHTML = "↓Age";
        render(STUDENTSSORT, 1);
    }
    else if (ageSort.innerHTML == "↓Age"){
        ageSort.innerHTML = "Age";
        render(STUDENTS,1);
    }
    else {
        STUDENTSSORT = STUDENTSSORT.sort(function(a,b){
            return a.age - b.age;
        });
        ageSort.innerHTML = "↑Age";
        render(STUDENTSSORT,1);
    }
}

ageSort.addEventListener("click",ageSorting);