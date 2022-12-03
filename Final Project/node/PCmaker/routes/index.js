
// /* GET home page. */
// router.get('/', function(req, res, next) {

// });
(function(){
    var express = require('express');
    var router = express.Router();
    var mysql = require('mysql');


    let API={
        urls: function(cnfg){
            for(url in cnfg){
                //url => apple
                //cnfg[url] => hello
            }
        },
        all: function(url,mehtod){
            switch(mehtod){
                case "GET":
                    router.get(url, function (req, res, next) {
                        res.send("its work");
                    });
                break;
                case "POST":
                    router.post(url, function (req, res, next) {
                        res.send("its work");
                    });
                    break;
            }
        },
    }
    
    API.urls({
        mainRoot : '/',
        cpu : '/cpu',
    })
    module.exports = router;
})();