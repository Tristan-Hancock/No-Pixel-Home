fetch("betadata.json")
.then(function(response){
    return response.json();
})
.then(function(betadata){
    let placeholder = document.querySelector("#data-output");
    let out = "";

    // check this bs 
    if (betadata.length === 0) {
        // this better fucking work
        out = `
        <div class="offline-mode">
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
        <img src="offline1.png" alt="offline">
      </div>
      
        
        
        
        
        
        </div>
        `
    } else {
        // if this dosent run re check above 
        for(let product of betadata){
            out +=`
            <div id="data-output">
            <div class= "card">
            <style>
            .card{
                background-color: #222;
            }
            


            </style
            <div class="card-container">
            <a href="${product.stream_details.stream_link}" target="_blank">
            <div class="card-thumbnail" style="background-image: url(${product.stream_details.thumbnail_url});">
            <div class="current_watching">🔴 ${product.stream_details.current_watching} </div>
            
            </div> </a>
            <div class="card-body">
            <div class="card-bottom">
            <div class="card-title"> ${product.channel_title}   
           
            
            </div>
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
    }

   
    placeholder.innerHTML = out;
});
