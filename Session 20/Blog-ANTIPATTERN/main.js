$("button").on("click",()=>{
    $.ajax({
        url : "https://jsonplaceholder.ir/posts",
        method : "GET",
        success : res=>{
            let template = res.map(post=>{
                return `
                    <div onclick="divClick(${post.id})">
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    </div>
                `;
            }).join("");
            $("#root").html(template);
        }
    })
})

function divClick(id){
    $.ajax({
        url : `https://jsonplaceholder.ir/posts/${id}`,
        method : "GET",
        success : res=>{
            let template =  `
                    <div onclick="divClick(${res.id})">
                        <h2>${res.title}</h2>
                        <p>${res.body}</p>
                    </div>
                `;
            $("#root").html(template);
        }
    })
}