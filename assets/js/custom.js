
let tabContent = document.querySelectorAll('.navigation li a');
tabContent.forEach(function(item,index){
    
    item.onclick = function(){
        
        tabContent.forEach((x) => x.classList.remove("active"));
        
        item.classList.add("active");
        let tab = item.getAttributeNode("focus-tab").value;
       document.querySelectorAll(".list-games").forEach((item) => item.classList.remove("active"))
        document.querySelector(".list-games[tab='"+tab+"']").classList.add("active");
        //console.log();
    };
})
		
     