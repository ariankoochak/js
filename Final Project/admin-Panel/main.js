(function($){
    // $('button').each(function(index,button){
        
    // })
    let ROOT={
        nowInput : "",
        start: function(cnfg){
            this.config = cnfg;
            this.buttonEvents();
            this.sumbitEvents();
        },

        buttonEvents: function(){
            let buttons = this.config.buttons;
            const that = this;
            buttons.each(function(index,button){
                $(button).on('click',function(buttonEvent){
                   that.openInput($(buttonEvent.currentTarget).attr('state'));
                })
            });
        },

        openInput:function(state){
            if (this.nowInput)
                $(`#${this.nowInput}-state`).css('display', 'none');
            $(`#${state}-state`).css('display', 'block');
            this.nowInput = state;
        },

        sumbitEvents:function(){
            let buttons = this.config.submitButtons;
            const that = this;
            buttons.each(function (index, button) {
                $(button).on('click', function (buttonEvent) {
                    that.PrepareInput();
                })
            });

        },

        PrepareInput:function(){
            let inputs = $(`#${this.nowInput}-state > input`);
            let url = `localhost:3000/${this.nowInput}/`;
            inputs.each(function(index,input){
                if(input.value){
                    url += input.value + '/';
                    input.value = '';
                }
            })
            this.sendToBack(url);
        },

        sendToBack: function(url){
            console.log(url);
        }
    }

    ROOT.start({
        buttons : $('[why=state]'),
        inputs: $('input'),
        submitButtons : $('[why=submit]'),
    })

})(jQuery)