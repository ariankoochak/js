let countries = ["iran","australia","brazil","USA","germany","findland","china","norway","England","italy","georgia","UAE","argentina"];
let Aplhabet = [];
countries = countries.map(country=>{return country.toLowerCase()});
countries = countries.sort((a, b)=>{return a.localeCompare(b)});

//به زودی در این محل کد نصب میشود

console.log(Aplhabet);