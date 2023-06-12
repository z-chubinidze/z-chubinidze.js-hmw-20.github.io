

function cklick(){
    const bod = document.getElementById("gsgs");
    const box3 = document.getElementById("box1");
    const erow = document.getElementById("errowcircle");
   
    bod.style.backgroundColor = "#383838";
    bod.style.transitionDuration = "0.4s";
    box3.style.backgroundColor = "#383838";
    box3.style.transitionDuration = "0.4s";
    erow.style.backgroundColor = "#383838";
    erow.style.transitionDuration = "0.4s";
    erow.style.boxShadow = " -2px -2px 4px rgba(244, 244, 244, 0.25), 2px 2px 4px rgba(255, 255, 255, 0.25)";
    
    document.getElementById("moon").style.display = "block";
    document.getElementById("sun").style.display = "none";
    document.getElementById("black").style.display = "block";
    document.getElementById("topsun").style.display = "none";
    document.getElementById("topmoon").style.display = "block";
    document.getElementById("whitemenu").style.display = "none";
    document.getElementById("blackmenu").style.display = "block";
    document.getElementById("Choose").style.color = "#FFF";
    document.getElementById("Customize").style.color = "#EEEEEE";
    document.getElementById("skip").style.color = "#EEEEEE";
    document.getElementById("light").style.backgroundColor = "transparent";
    document.getElementById("light").style.boxShadow = "none";
    document.getElementById("dark").style.backgroundColor = "#555252";
    document.getElementById("dark").style.boxShadow = " 4px 4px 22px rgba(0, 0, 0, 0.25)";
    

    setTimeout(function(){
        
        bod.style.backgroundColor = "#FFF";
        bod.style.transitionDuration = "0.4s";
        box3.style.backgroundColor = "#FFF ";
        box3.style.transitionDuration = "0.4s";
        erow.style.backgroundColor = "#FFF";
        erow.style.boxShadow = "-2px -2px 4px rgba(103, 103, 103, 0.25), 2px 2px 4px rgba(100, 100, 100, 0.25)";
        document.getElementById("moon").style.display = "none";
        document.getElementById("sun").style.display = "block";
        document.getElementById("black").style.display = "none";
        document.getElementById("topsun").style.display = "block";
        document.getElementById("topmoon").style.display = "none";
        document.getElementById("whitemenu").style.display = "block";
        document.getElementById("blackmenu").style.display = "none";
        document.getElementById("Choose").style.color = "#000000";
        document.getElementById("Choose").style.transitionDuration = "0.3s";
        document.getElementById("Customize").style.color = "#414141";
        document.getElementById("skip").style.color = "#000000";
        document.getElementById("light").style.backgroundColor = "#FFF";
        document.getElementById("light").style.boxShadow = "4px 4px 22px rgba(0, 0, 0, 0.25)";
        document.getElementById("dark").style.backgroundColor = "transparent";
        document.getElementById("dark").style.boxShadow = " none";    
        
    }, 4000)
}