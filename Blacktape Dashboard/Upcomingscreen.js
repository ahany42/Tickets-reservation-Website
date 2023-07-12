var add =document.getElementById("add");
var del = document.getElementById("delete");
var edit = document.getElementById("edit");
var addform = document.getElementById("Addform");
var deleteform = document.getElementById("Deleteform");
var editform = document.getElementById("Editform");
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
del.addEventListener('click',function(){
    if(deleteform.style.display == "flex"){
        deleteform.style.display = "none";
        for(var i=0;forms.length>i;++i){
            if(forms[i]!=deleteform){
                forms[i].style.display = "none";
            }
        }
    }else{
        deleteform.style.display = "flex";
        for(var i=0;forms.length>i;++i){
            if(forms[i]!=deleteform){
                forms[i].style.display = "none";
            }
        }
    }
})
edit.addEventListener('click',function(){
    if(editform.style.display == "flex"){
        editform.style.display = "none";
        for(var i=0;forms.length>i;++i){
            if(forms[i]!=editform){
                forms[i].style.display = "none";
            }
        }
    }else{
        editform.style.display = "flex";
        for(var i=0;forms.length>i;++i){
            if(forms[i]!=editform){
                forms[i].style.display = "none";
            }
        }
    }
})