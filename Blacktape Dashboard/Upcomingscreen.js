//menubar click
var menubar = document.getElementById("bar");
var navcontainer = document.getElementsByClassName("navcontainer");
menubar.addEventListener('click',function(){
    if(navcontainer[0].classList.contains("navbaropenextra")){
        navcontainer[0].classList.add("navbarcloseextra");
        navcontainer[0].classList.remove("navbaropenextra");
    }else{
        navcontainer[0].classList.add("navbaropenextra");
        navcontainer[0].classList.remove("navbarcloseextra");
    }
})
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
//placeholder for edit
var eventbutton = document.getElementsByClassName("EditEvent");
eventbutton[0].addEventListener('change',function(){
    var programname = document.getElementsByClassName("programname");
    programname[0].value=eventbutton[0].value;
})
//validation addform name
var Awarningname = document.getElementById("Awarningname");
var Ainputname = document.getElementById("Aname");
Ainputname.addEventListener('input',function(){
    var length = this.value.length;
    if(length==18){
        Awarningname.style.display= "block";
    }else{
        Awarningname.style.display ="";
    }
})
//validation addform description
var Awarningdesc = document.getElementById("Awarningdesc");
var Ainputdesc = document.getElementById("ADesc");
Ainputdesc.addEventListener('input',function(){
    var length = this.value.length;
    if(length==151){
        Awarningdesc.style.display= "block";
    }else{
        Awarningdesc.style.display ="";
    }
})
//validation editform name
var Ewarningname = document.getElementById("Ewarningname");
var Einputname = document.getElementById("Ename");
Einputname.addEventListener('input',function(){
    var length = this.value.length;
    if(length==18){
        Ewarningname.style.display= "block";
    }else{
        Ewarningname.style.display ="";
    }
})
//validation editform description
var Ewarningdesc = document.getElementById("Ewarningdesc");
var Einputdesc = document.getElementById("EDesc");
Einputdesc.addEventListener('input',function(){
    var length = this.value.length;
    if(length==151){
        Ewarningdesc.style.display= "block";
    }else{
        Ewarningdesc.style.display ="";
    }
})
