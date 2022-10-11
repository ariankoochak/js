function digitFilter(...args){
    let exp = args.filter(function(arg){
        return typeof(arg) === "number" && arg > 0;
    });
    console.log(exp);
}
digitFilter("dsf",324,"fg",4,-2,0,"kdjsfi","12");