//functions
async function personRender(URL){
    let filmList = [];
    let res = await fetch(URL);
    res = await res.json();
    for (let film of res.films) {
        let pushing = await fetch(film);
        pushing = await pushing.json();
        filmList.push([film,pushing.title]);
    }
    let template = `
         <ul>
            <h3>name : ${res.name}</h3>
            <li>height : ${res.height}</li>
            <li>mass : ${res.mass}</li>
            <li>hair Color : ${res.hair_color}</li>
            <li>skin color : ${res.skin_color}</li>
            <li>eye color : ${res.eye_color}</li>
            <li>birth year : ${res.birth_year}</li>
            <li>gender : ${res.gender}</li>
            <h2>film list</h2>
    `;
    for(let film of filmList){
        template += `<a onclick = "changePage('${film[0]}',1)">${film[1]}</a><br><br>`;
    }
    template += `</ul>`;
    console.log(template);
    $("#root").html(template);
}

async function filmRender(URL) {
    let peopleList = [];
    let res = await fetch(URL);
    res = await res.json();
    for (let people of res.characters) {
        let pushing = await fetch(people);
        pushing = await pushing.json();
        peopleList.push([people, pushing.name]);
    }
    let template = `
         <ul>
            <h3>${res.title}</h3>
            <li>director : ${res.director}</li>
            <li>openingcrawl : ${res.opening_crawl}</li>
            <li>producer : ${res.producer}</li>
            <li>release date : ${res.release_date}</li>
            <h2>characters</h2>
    `;
    for (let people of peopleList) {
        console.log("fuck");
        template += `<a onclick="changePage('${people[0]}',0)">${people[1]}</a><br><br>`;
    }
    template += `</ul>`;
    console.log(template);
    $("#root").html(template);
}


function changePage(URL,type){
    $("#root").html("Loading...");
    if(type == 0)
        personRender(URL);
    else
        filmRender(URL);
}


//events
filmRender("https://swapi.dev/api/films/1/"); 