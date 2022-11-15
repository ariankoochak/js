(function($,H){
    let POSTS = {
        doms: (cnfg)=>{
         this.config = cnfg;   
         POSTS.clickButton();
        },
        clickButton : ()=>{
            this.config.button.on("click",()=>{
                console.log("CLicked")
            })
        },
    }
    POSTS.doms({
        button : $("button"),
        root : $("#root"),
    })
})(jQuery,Handlebars)