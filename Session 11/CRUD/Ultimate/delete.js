function deleteFromDataBase(id){
    let deleteStudent = STUDENTS.find(function(std){
        return std.id == id;})
        ;
    STUDENTS.splice(STUDENTS.indexOf(deleteStudent),1);
    if(STUDENTS.length % pageLayout == 0)
        nowPage--;
    render(STUDENTS,nowPage);
}