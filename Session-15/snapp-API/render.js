let mainRoot = document.getElementById("root");

function render(category){
    let root = `<div id="${category.slug}" class="rooting"></div>`
    root = `
        <h2>${category.title}</h2>
    `;
    let template = category.products.map((ind)=>{
        const {id,title,images,price} = ind;
        return `
        <div id = "${id}" class = "card">
            <img src="${images[0].image}">
            <h2>${title}</h2>
            <h4 style ="color:red">${price} تومان</h4>
        </div>`
    }).join("");
    root += template;
    mainRoot.innerHTML += root;
}