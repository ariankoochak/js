let root = document.querySelector("h2");
async function getPeople(){
    let give = await fetch("https://swapi.dev/api/people/1/");
    give = await give.json();
    let template = makeTemplate(give);
    console.log(give);
    root.innerHTML = template;
}

function makeTemplate(obj){
    let template = ``;
    for (const key in obj) {
        template += `
            <h3>${key}: <h3>
            <h4>${obj[key]}</h4><br><br>
        `;
    }
    return template;
}

getPeople();