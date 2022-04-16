const enlaces = document.getElementsByClassName("enlaces")[0];
const icon = document.getElementsByClassName("icon")[0];
const menuicon = document.getElementById("icon")
let abierto= false;


const toggleMenu = () =>{
    enlaces.classList.toggle("enlaces2");
    enlaces.style.transition ="transform 0.5s ease-in-out";
}

icon.addEventListener("click", function(){
    toggleMenu();
    if(document.querySelector("enlaces.emlaces2")){
        abierto=true;
    }else{
        abierto=false;
    }
})

window.addEventListener("click", function(e){
this.console.log(e.target)
if (abierto){
    if(e.target !== menuicon){
        toggleMenu();
        abierto=false
        }
    }
}) 

window.addEventListener("resize", function(){
if(this.screen.width>800){
    if(abierto){
        toggleMenu();
        enlaces.style.transition="none"
        abierto=false
    }
}
})
