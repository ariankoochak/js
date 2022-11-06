let root = document.querySelector("h2");
async function getPeople(){
    let give = await fetch("https://swapi.dev/api/people/1/");
    give = await give.json();
    let template = `
        <h3>name: </h3>
            <h4>${give.name}</h4><br>
        <h3>height: </h3>
            <h4>${give.height}</h4><br>
        <h3>hair color: </h3>
            <h4>${give.hair_color}</h4><br>
        <h3>mass: </h3>
            <h4>${give.mass}</h4><br>
        <h3>gender: </h3>
            <h4>${give.gender}</h4><br>
    `;
    console.log(give);
    root.innerHTML = template;
}

getPeople();