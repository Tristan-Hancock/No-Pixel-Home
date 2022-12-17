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
        <div class="sidebar-container">
          <div class="sidbar-content">
          <h5> ${product.channel_title}</h5>
            <a href="${product.stream_details.stream_link}" class="sidebar-content-title">
              
            </a>
            <a href="${product.stream_details.stream_link}" class="sidebar-content-description">
              <p>${product.stream_details.title}</p>
            </a>
          </div>
        </div>
      </div>
      
           
        `;

    }
    placeholder.innerHTML = out;
})
