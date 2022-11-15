(function($,H){
    let POSTS = {
        doms: (cnfg)=>{
         this.config = cnfg;   
         POSTS.clickButton();
        },
        clickButton : ()=>{
            this.config.button.on("click",()=>{
                let res = POSTS.getData("https://jsonplaceholder.ir/posts");
                console.log(res);
            })
        },
        getData : async (url)=>{
            return await POSTS.ajaxReq(url);
        },
        ajaxReq : (url)=>{
            $.ajax({
                url : url,
                success : res =>{
                    return res;
                }
            })
        },
    }
    POSTS.doms({
        button : $("button"),
        root : $("#root"),
    })
})(jQuery,Handlebars)