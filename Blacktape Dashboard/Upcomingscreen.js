var add =document.getElementById("add");
var del = document.getElementById("delete");
var edit = document.getElementById("edit");
var addform = document.getElementById("Addform");
var forms = document.getElementsByClassName("form");
add.addEventListener('click',function(){
    if(addform.style.display == "flex"){
        addform.style.display = "none";
        for(var i=0;forms.length>i;++i){
            if(forms[i]!=addform){
                forms[i].style.display = "none";
            }
        }
    }else{
        addform.style.display = "flex";
        for(var i=0;forms.length>i;++i){
            if(forms[i]!=addform){
                forms[i].style.display = "none";
            }
        }
    }
})