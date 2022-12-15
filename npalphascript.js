fetch("alphadata.json")
.then(function(response){
    return response.json();
})
.then(function(alphadata){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let product of alphadata){
        out +=`


        <div id="data-output">
        <div class= "card">
        <div class="card-container">
        <a href="${product.stream_details.stream_link}" target="_blank">
        <div class="card-thumbnail" style="background-image: url(${product.stream_details.thumbnail_url});">
        <div class="current_watching">LIVE WATCHING 🔴 ${product.stream_details.current_watching} </div>
        
        </div> </a>
        <div class="card-body">
        <div class="card-bottom">
          <div class="card-title"> ${product.channel_title}        </div>
          <div class="platform"> ${product.stream_details.platform}  </div>
          </div>
          <!-- <div class="card-views"> ${product.total_view_count}</div> -->
         <!-- <div class="current_watching">Current Watching 🔴 ${product.stream_details.current_watching} </div> -->
         <!-- <div class="link"> <a href="${product.stream_details.stream_link}" target="_blank">WATCH LIVE 🔴 </a> </div> -->
        </div>
        </div>
        </div>
        </div>        
        `;

    }
    placeholder.innerHTML = out;
})
