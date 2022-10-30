let mainRoot = document.getElementById("root");

function splitPrice(price){
    price = String(price).split("");
    let counter = 1;
    for(let i = price.length-1;i >= 0;i--){
        if(counter == 3 && i != 0){
            price.splice(i,0,",");
            counter = 1;
        }
        else
            counter++;
    }
    return price.join("");
}

function render(category){
    let root = `<div id="${category.slug}" class="rooting"><h2>${category.title}</h2>`;
    let template = category.products.map((ind)=>{
        const {id,title,images,price} = ind;
        return `
        <div id = "${id}" class = "card">
            <img src="${images[0].image}">
            <h2>${title}</h2>
            <h2 style ="color:red">${splitPrice(price)} تومان</h2>
        </div>`
    }).join("");
    root += template;
    root += `</div>`;
    mainRoot.innerHTML += root;
}