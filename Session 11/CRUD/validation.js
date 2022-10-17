function validationModals(fullName,email,age,course){
    let errs = [];
    if(!fullName)
        errs.push("Name");
    if(!email)
        errs.push("email");
    if(!age)
        errs.push("age");
    if(!course)
        errs.push("course");
    else
        return true;
    errs = errs.map(function(err,index){return index == errs.length-1 ? err : err + " , "});
    errs = errs.join("");
    alert("please insert " + errs);
}