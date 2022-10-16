let paginationDom = document.getElementById("pagination-dom");
let pageLayout = 10
let nowPage = 1;
function pageMaker(arr){
    let pageNum = Math.ceil(arr.length / pageLayout);
    let pass = 0;
    let paginationTemplate = `
            <li class="page-item">
                <a class="page-link" href="#" tabindex="-1" id = "prev-page">Previous</a>
            </li>
    `;
    if(arr == STUDENTSFILTER)
        pass = 1;
    else if (arr == STUDENTSSORT)
        pass = 2;
    for(let i = 1; i <= pageNum;i++){
        paginationTemplate += `
            <li class="page-item"><a class="page-link" href="#" onclick = "changePage(${i},${pass})">${i}</a></li>
        `;
    }
    paginationTemplate += `
        <li class="page-item">
            <a class="page-link" href="#" id = "next-page">Next</a>
        </li>
        <li class="page-item">
            <input type="text" class = "form-control mr-sm-2" id = "select-page">
            <button class="btn btn-sm btn-outline-secondary" type="button" id = "set-select-page">Set</button>
        </li>
    `;
    paginationDom.innerHTML = paginationTemplate;
    let textPageLayout = document.getElementById("select-page");
    document.getElementById("set-select-page").addEventListener("click",function(){
        let textPageLayout = document.getElementById("select-page");
        pageLayout = textPageLayout.value;
        render(arr, 1);
    });
    textPageLayout.value = pageLayout;
    if (nowPage == 1)
        document.getElementById("prev-page").classList.add("disabled");
    if(nowPage == pageNum)
        document.getElementById("next-page").classList.add("disabled");
    document.getElementById("prev-page").addEventListener("click",function(){
        render(arr,--nowPage);
    });
    document.getElementById("next-page").addEventListener("click", function () {
        render(arr, ++nowPage);
    });
}

function LayoutMaker(arr,pageNum){
    let exp = arr.filter(function(std,index){
        if (index + 1 <= (pageNum * pageLayout) && index + 1 > ((pageNum * pageLayout)-pageLayout))
            return std;
    });
    return exp;
}


function changePage(pageNum,pass){
    nowPage = pageNum;
    if(pass == 1)
        render(STUDENTSFILTER,pageNum);
    else if(pass == 2)
        render(STUDENTSSORT);
    else
        render(STUDENTS,pageNum);
}




