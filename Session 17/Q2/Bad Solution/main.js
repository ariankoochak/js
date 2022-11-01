let countries = ["iran","australia","brazil","USA","germany","findland","china","norway","England","italy","georgia","UAE","argentina"];
let Aplhabet = [
    {
        Alpha : "A",
        country : [],
        count : 0,
    },
    {
        Alpha: "B",
        country: [],
        count: 0,
    },
    {
        Alpha: "C",
        country: [],
        count: 0,
    },
    {
        Alpha: "D",
        country: [],
        count: 0,
    },
    {
        Alpha: "E",
        country: [],
        count: 0,
    },
    {
        Alpha: "F",
        country: [],
        count: 0,
    },
    {
        Alpha: "G",
        country: [],
        count: 0,
    },
    {
        Alpha: "H",
        country: [],
        count: 0,
    },
    {
        Alpha: "I",
        country: [],
        count: 0,
    },
    {
        Alpha: "J",
        country: [],
        count: 0,
    },
    {
        Alpha: "K",
        country: [],
        count: 0,
    },
    {
        Alpha: "L",
        country: "",
        count: 0,
    },
    {
        Alpha: "M",
        country: [],
        count: 0,
    },
    {
        Alpha: "N",
        country: [],
        count: 0,
    },
    {
        Alpha: "O",
        country: "",
        count: 0,
    },
    {
        Alpha: "P",
        country: [],
        count: 0,
    },
    {
        Alpha: "Q",
        country: [],
        count: 0,
    },
    {
        Alpha: "S",
        country: [],
        count: 0,
    },
    {
        Alpha: "T",
        country: [],
        count: 0,
    },
    {
        Alpha: "U",
        country: [],
        count: 0,
    },
    {
        Alpha: "V",
        country: [],
        count: 0,
    },
    {
        Alpha: "W",
        country: [],
        count: 0,
    },
    {
        Alpha: "X",
        country: [],
        count: 0,
    },
    {
        Alpha: "Y",
        country: [],
        count: 0,
    },
    {
        Alpha: "Z",
        country: [],
        count: 0,
    },
];
countries = countries.map(country=>{return country.toLowerCase()});

countries = countries.sort((a, b)=>{return a.localeCompare(b)});

for(let country of countries){
    let check = country.split("");
    for (let i = 0; i <= Aplhabet.length;i++){
        if(check[0] == Aplhabet[i].Alpha.toLocaleLowerCase()){
            Aplhabet[i].country[Aplhabet[i].count] = country;
            Aplhabet[i].count++;
            break;
        }
    }
}
for(let alpha of Aplhabet){
    let template = ``;
    if(alpha.count > 0){
        template += `${alpha.Alpha}(${alpha.count})</br>`
        for(let i = 0;i < alpha.count;i++){
            template += `${alpha.country[i]}</br>`
        }
        document.getElementById("root").innerHTML += template;
    }
}

console.log(Aplhabet);