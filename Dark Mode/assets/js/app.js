var btn=document.getElementById("demo")
function DarkMode(){
    if(document.body.style.backgroundColor==="white"){
        document.body.style.backgroundColor ="black";
        document.body.style.color ="white";
        btn.innerHTML="Light mode"  
    }
    else{
        document.body.style.backgroundColor ="white";
        document.body.style.color ="black";
        btn.innerHTML="Dark mode"    
    }
}