function render(){
    PRICES.map((crypt) =>{
        const{id , name , price , img} = crypt;
        let template = `
        <img src="${img}" class="card-img-top" alt="dogecoin">
        <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p></p>
        <button class="btn btn-primary" id = "${id}">show price</button>
        `;
        $(".card")[id].innerHTML = template;
    });
    $("button").on("click",(e)=>{
        let crypto = PRICES.find((crypt) => {
            if(crypt.id === Number($(e.target).attr("id")))
                return crypt.price;
            })
            $(e.target).siblings()[1].innerHTML = `$${crypto.price}`;
            $(e.target).html("Update Price");
    });
}
render();

