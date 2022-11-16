(function($,H){
    let POSTS = {
        doms: function(cnfg) {
            this.config = cnfg;   
            this.setupTemplate();
            this.setClicks();
        },
        setClicks: function() {
            this.config.allPostsRenderButton.on("click",this.clickAllPostsRenderButton);
            this.config.root.on("click", "div", (e) => {this.clickPost(e)});
        },
        clickAllPostsRenderButton : function(){
            POSTS.reqAndRender("https://jsonplaceholder.ir/posts");
        },
        clickPost : function(e){
            if($(e.target).data("userid")){
                let userID = $(e.target).data("userid");
                POSTS.reqAndRender(`https://jsonplaceholder.ir/users/${userID}/posts`);
            }
            else{
                let id = $(e.currentTarget).data("id");
                POSTS.reqAndRender(`https://jsonplaceholder.ir/posts/${id}`)
            }
        },
        setupTemplate : function(){
            this.template = H.compile(this.config.template.html());
        },
        reqAndRender : function(url){
            $.ajax({
                url : url,
                success : function (res){
                    if (res[0])
                        POSTS.config.root.html(POSTS.template({ result: res }));
                    else
                        POSTS.config.root.html(POSTS.template({ result: [res] }));
                }
            })
        },
    }

    POSTS.doms({
        allPostsRenderButton : $("#render-button"),
        root : $("#root"),
        template : $("#post"),
    })


})(jQuery,Handlebars)