function splitPrice(price) {
    price = String(price).split("");
    let counter = 1;
    let i = price.length - 1;
    let ind = price.indexOf(".")
    if(ind != -1){
        i = ind - 1;
    }
    for (; i >= 0; i--) {
        if (counter == 3 && i != 0) {
            price.splice(i, 0, ",");
            counter = 1;
        }
        else
            counter++;
    }
    return price.join("");
}
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
    $(".btn-primary").on("click",(e)=>{
        let crypto = PRICES.find((crypt) => {
            return crypt.id === Number($(e.target).attr("id"))
        })
        $.get("https://api.nobitex.ir/market/stats?srcCurrency=btc,eth,etc,usdt,ada,bch,ltc,bnb,eos,xlm,xrp,trx,doge,uni,link,dai,dot,shib,aave,ftm,matic,axs,mana,sand,avax,usdc,gmt,mkr,sol,atom,grt,bat,near,ape,qnt,chz,xmr,gala,busd,algo,pmn&dstCurrency=rls,usdt",(res,status) => {
            const {btc , eth ,doge , usdt,sol,shib} = res.global.binance; //bitcoin , etheruem , dogecoin , tether ,solona ,shiba
            let sit = "";
            if(crypto.price > eval(crypto.dataSymbol) && crypto.price != "-"){
                $(e.target).siblings()[1].classList.remove("green-sit");
                $(e.target).siblings()[1].classList.add("red-sit");
                sit = "↓";
            }
            else if (crypto.price < eval(crypto.dataSymbol) && crypto.price != "-"){
                $(e.target).siblings()[1].classList.remove("red-sit");
                $(e.target).siblings()[1].classList.add("green-sit");
                sit = "↑";
            }
            else if ($(e.target).siblings()[1].classList.contains("red-sit") || $(e.target).siblings()[1].classList.contains("green-sit")){
                sit = $(e.target).siblings()[1].innerHTML.slice(0,1);
            }
            console.log(crypto.name+ " -> " + crypto.price);
            crypto.price = eval(crypto.dataSymbol);
            $(e.target).siblings()[1].innerHTML = `${sit}$${splitPrice(crypto.price)}`;
            $(e.target).html("Update Price");
        })
    });
}
render();

