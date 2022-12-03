
// /* GET home page. */
// router.get('/', function(req, res, next) {

// });
(function(){
    var express = require('express');
    var router = express.Router();
    var mysql = require('mysql');


    let API={
        urls: function(cnfg){
            this.config = cnfg;
            this.PrepareLinks();
        },
        PrepareLinks: function(){
            this.PrepareReq('/', "GET");
            for (url in this.config) {
                this.PrepareReq(this.config[url], "GET");
                this.PrepareReq(this.config[url]+'/:id', "GET");
                this.PrepareReq(this.config[url], "POST");
                this.PrepareReq(this.config[url] + '/:id', "POST");
            }
        },
        PrepareReq: function(url,mehtod){
            let that = this;
            switch(mehtod){
                case "GET":
                    router.get(url, function (req, res, next) {
                        if(req.params.id){
                            let result = that.sendGet();
                            res.send(req.params.id + " " + result);
                        }
                        else{
                            let result = that.sendGet();
                            res.send(result);
                        }
                    });
                    break;
                case "POST":
                    router.post(url, function (req, res, next) {
                        if (req.params.id) {
                            let result = that.sendPost();
                            res.send(req.params.id + " " + result);
                        }
                        else {
                            let result = that.sendPost();
                            res.send(result);
                        }
                    });
                    break;
            }
        },
        sendGet: function(){
            return "Get its Work";
        },
        sendPost: function(){
            return "Post its Work!";
        },
        connectToServer: function(){
            return "connectToServer";
        },
    }
    
    API.urls({
        cpu : '/cpu',
        motherBoard : '/motherBoard',
        ram : '/ram',
        gpu : '/gpu',
        case : '/case',
        ssd: '/ssd',
        hdd : '/hdd',
        power : '/power',
    })
    module.exports = router;
})();