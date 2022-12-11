let cart = [0];

(function($,H){
    const ROOT = {
        start : function(cnfg){
            this.config = cnfg;
            this.initializeSteps();
            this.addToCartClickEvent();
            this.backButtonClickEvent();
            this.nextButtonClickEvent();
        },


        nextButtonClickEvent : function(){
            const that = this;
            this.config.nextButton.on('click',function(){
                nowStep++;
                that.initializeSteps();
            })
        },

        checkForNext: function () {
            if (nowStep == 5 || nowStep == 6) {
                this.config.nextButton.css('display', 'block');
            }
            else
                this.config.nextButton.css('display', 'none');
        },

        productClickEvent : function(){
            const that = this;
            $(this.config.products).on('click',function(){
                that.selectionData(this);
            })
        },

        selectionData: function (data) {
            $(this.config.targetProduct).removeClass('selected-product');
            $(data).addClass('selected-product');
            this.config.targetProduct = data;
            this.showPrice($(`#${$(data).attr('id')} > .price`));
        },

        showPrice: function (nonSubmitPrice) {
            nonSubmitPrice = this.unParseNumber(nonSubmitPrice.html());
            let price = cart[0] + nonSubmitPrice;
            this.config.showLivePrice.html(this.parseNumber(price) + " T");
        },

        addToCartClickEvent: function(){
            const that = this;
            $(this.config.addToCartButton).on('click', function () {
                if(that.config.targetProduct){
                    that.prepareMode();
                    that.prepareCart();
                    if(nowStep < 7){
                        nowStep++;
                        that.initializeSteps();
                    }
                    else{
                        console.log("finish!");
                    }
                    if (nowStep > 0)
                        that.config.backButton.css('display', 'block');
                    that.checkForNext();
                }
            })
        },

        prepareMode : function(){
            productSelectedId = $(this.config.targetProduct).attr('id');
            MODES[nowStep].ProductSelectedID = +productSelectedId;
            MODES[nowStep].price = this.unParseNumber($(`#${productSelectedId} > .price`).html());
        },

        prepareCart : function(){
            let price = this.unParseNumber($(`#${productSelectedId} > .price`).html());
            cart[nowStep + 1] = price;
            cart[0] += price;
        },


        backButtonClickEvent: function(){
            this.config.backButton.on('click',()=>{
                cart[0] -= cart[nowStep];
                cart[nowStep] = 0;
                nowStep--;
                this.initializeSteps();
                if (nowStep == 0)
                    this.config.backButton.css('display', 'none');
                this.checkForNext();
            })
        },

        initializeSteps : function(){
            this.getData(MODES[nowStep].url,(res)=>{this.renderProduct(res)});
        },

        getData : function(url,callback){
            $.get(url,(res)=>{callback(res)});
        },

        renderProduct : function(datas){
            console.log(cart);
            let rendering = H.compile(this.config.handleBarProductTemplate);
            let template = datas.map((data)=>{
                return rendering(data);
            }).join("");
            this.config.productRoot.html(template);
            this.config.products = $('.product');
            this.productClickEvent();
            if(MODES[nowStep].ProductSelectedID != 0){
                let prevProduct = this.config.productRoot.children().get().find(function (product) {
                    return MODES[nowStep].ProductSelectedID === +($(product).attr('id'))
                })
                this.selectionData(prevProduct);
            }
        },

        unParseNumber : function(number){
            number = number.split(",");
            number = number.join("");
            return +number;
        },

        parseNumber: function (number) {
            number = String(number).split("");
            let counter = 1;
            let i = number.length - 1;
            let ind = number.indexOf(".")
            if (ind != -1) {
                i = ind - 1;
            }
            for (; i >= 0; i--) {
                if (counter == 3 && i != 0) {
                    number.splice(i, 0, ",");
                    counter = 1;
                }
                else
                    counter++;
            }
            return number.join("");
        },


    };

    ROOT.start({
        productRoot : $('#product-root'),
        handleBarProductTemplate: $('#product-template').html(),
        products : $(''),
        targetProduct: $(''),
        addToCartButton : $('#add-to-cart'),
        showLivePrice: $('#now-price'),
        backButton : $('#back'),
        nextButton : $('#next'),
    })

})(jQuery, Handlebars);