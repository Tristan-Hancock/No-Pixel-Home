fetch("betadata.json")
.then(function(response){
    return response.json();
})
.then(function(betadata){
    let placeholder = document.querySelector("#data-sidebar-output");
    let out = "";
    for(let product of betadata){
        out +=`



        <div id="data-sidbar-output">
        <div class="sidebar-container">
          <div class="sidbar-content">
          <div class="sidebar-pfp">
          <a href="${product.stream_details.stream_link}" class="sidebar-content-description">
          <img src="${product.profile_pic}" class="pfpedit">
          </a>


          </div>
          <h5> ${product.channel_title}</h5>
            <a href="${product.stream_details.stream_link}" class="sidebar-content-title">
              
            </a>
            <div class="title-details">
            
            <a href="${product.stream_details.stream_link}" class="sidebar-content-description">
              <p>${product.stream_details.title}</p>
            </a>
            </div>
          </div>
        </div>
      </div>
      
           
        `;

    }
    placeholder.innerHTML = out;
})
