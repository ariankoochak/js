let countries = ["iran","australia","brazil","USA","germany","findland","china","norway","England","italy","georgia","UAE","argentina"];
let Alphabet = [];
let root = document.getElementById("root");

countries = countries.map(country=>{return country.toLowerCase()});

countries = countries.sort((a, b)=>{return a.localeCompare(b)});

countries.forEach((country)=>{
    let check = Alphabet.find(alphaObject=>alphaObject.Alpha === country[0]);
    if(check)
        check.countryList.push(country);
    else{
        let obj = {
            Alpha : country[0],
            countryList : [],
        }
        obj.countryList.push(country);
        Alphabet.push(obj);
    }
})

Alphabet.forEach(alphaWord=>{
    let template = `
        <h1>${alphaWord.Alpha.toUpperCase()}(${alphaWord.countryList.length})</h1>
        <ul>`;
    alphaWord.countryList.forEach(country=>template += `<li>${country}</li>`);
    template += `</ul>`;
    root.innerHTML += template;
})