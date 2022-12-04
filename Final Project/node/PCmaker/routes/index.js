
// /* GET home page. */
// router.get('/', function(req, res, next) {

const { json } = require('express');

// });
(function(){
    var express = require('express');
    var router = express.Router();
    var serverAccess = require('../bin/database.js');

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
            }
        },
        PrepareReq: function(url,mehtod){
            const that = this;
            let table = this.findPiece(url);
            switch(mehtod){
                case "GET":
                    router.get(url, function (req, res, next) {
                        if(req.params.id)
                            that.connectToServer(`SELECT * FROM ${table} WHERE id=${req.params.id}`, result => res.send(result))
                        else
                            that.connectToServer(`SELECT * FROM ${table}`,result=>res.send(result))
                    });
                    break;
                case "POST":
                    router.post(url, function (req, res, next) {
                        let reqQuery = `INSERT INTO ${table} (`;
                        let obj = req.query;
                        for(let key in obj){
                            if(key !== 'price')
                                reqQuery += `${key},`
                            else
                                reqQuery += `${key}) values (`
                        }
                        for(let key in obj){
                            if (key !== 'price')
                                reqQuery += `'${obj[key]}',`
                            else
                                reqQuery += `'${obj[key]}')`
                        }
                        that.connectToServer(reqQuery, result => res.send(result));
                    });
                    break;
            }
        },

        findPiece: function(url){
            url = url.split('/:');
            switch(url[0]){
                case '/cpu':            return 'PCcpu'
                case '/motherBoard':    return 'PCmotherboard'
                case '/ram':            return 'PCram'
                case '/gpu':            return 'PCgpu'
                case '/ssd':            return 'PCssd'
                case '/case':           return 'PCcase'
                case '/hdd':            return 'PChdd'
                case '/power':          return 'PCpower'
            }
        },
        connectToServer: function(reqQuery,callback){
            serverAccess.query(reqQuery,function(err,result){
                callback(result);
            });
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