(function($,H){
    let POSTS = {
        doms: function(cnfg) {
            this.config = cnfg;   
            this.clicks();
            this.setupTemplate();
        },
        clicks: function() {
            this.config.button.on("click",this.clickButton);
            this.config.root.on("click","div",this.clickPost);
        },
        clickButton : function(){
            POSTS.renderOnRoot("https://jsonplaceholder.ir/posts");
        },
        clickPost : function(){
            let id = $(this).data("id");
            POSTS.renderOnRoot(`https://jsonplaceholder.ir/posts/${id}`)
        },
        setupTemplate : function(){
            this.template = H.compile(this.config.template.html());
        },
        renderOnRoot : function(url){
            $.ajax({
                url : url,
                success : function (res){
                    if(res[0])
                        POSTS.config.root.html(POSTS.template({result : res}));
                    else
                        POSTS.config.root.html(POSTS.template({ result: [res] }));
                }
            })
        }
    }

    POSTS.doms({
        button : $("button"),
        root : $("#root"),
        template : $("#post"),

    })


})(jQuery,Handlebars)