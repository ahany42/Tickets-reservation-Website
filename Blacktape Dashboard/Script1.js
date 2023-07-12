// JavaScript source code
/* let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
}) */



var moreinfo=document.getElementById("moreinfo");
var expandinfo=document.getElementById("expandinfo");
moreinfo.addEventListener('click', function(){
 
    if(expandinfo.style.display=='none' || expandinfo.style.display ==""){
        expandinfo.style.display='grid';
    }
    else{
        expandinfo.style.display='none';
    }


});