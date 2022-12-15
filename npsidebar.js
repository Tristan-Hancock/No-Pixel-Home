fetch("alphadata.json")
.then(function(response){
    return response.json();
})
.then(function(alphadata){
    let placeholder = document.querySelector("#data-sidebar-output");
    let out = "";
    for(let product of alphadata){
        out +=`


        <div id="data-sidbar-output">
        
        <div class="sidbar-content">
        <div class="sidebar-content-title"> <h5> 🔴 ${product.channel_title}|| </h5> </div>
        <div class="sidbar-content-description"><p1> ${product.stream_details.title} </p1> </div>


        </div>
           
        `;

    }
    placeholder.innerHTML = out;
})
