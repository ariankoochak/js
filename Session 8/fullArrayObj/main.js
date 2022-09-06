const students = [
    {
        name: 'ramtin',
        family: 'valipour',
        age: 19,
        skill: 'Adobe'
    },
    {
        name: 'arian',
        family: 'Koochak',
        age: 19,
        skill: 'js'
    },
    {
        name: 'abbas',
        family: 'elahi',
        age: 33,
        skill: 'math',
    },
    {
        name: 'hossein',
        family: 'elahi',
        age: 26,
        skill: 'doctor',
    }
]

for(let student of students){
    let li = document.createElement("li")
    li.textContent = student.name + " " + student.family;
    document.querySelector("ul").appendChild(li);
    
}