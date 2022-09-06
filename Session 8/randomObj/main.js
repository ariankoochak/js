const students = [
    {
        name : 'ramtin',
        family : 'valipour',
        age : 19,
        skill : 'Adobe'
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
let rand = Math.floor(Math.random() * students.length);
document.getElementById("name").textContent = students[rand].name;
document.getElementById("family").textContent = students[rand].family;
document.getElementById("age").textContent = students[rand].age;
document.getElementById("skill").textContent = students[rand].skill;