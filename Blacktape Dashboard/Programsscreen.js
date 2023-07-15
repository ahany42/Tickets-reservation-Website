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
// Pictures 
var selectnobutton = document.getElementById("nopictures");
var selectbutton = document.getElementById("picture");
var addform = document.getElementById("Addform");
var addpicture = document.getElementById("addpicture");
addpicture.remove();
var addbutton = document.getElementById("addbutton");
selectnobutton.addEventListener('change',function(){
    var number = document.getElementById("nopictures").value;
    var addpictures = addform.getElementsByClassName("AddPicture");
    var length = addpictures.length;
    while(addpictures[0]) {
    addpictures[0].parentNode.removeChild(addpictures[0]);
    }
    for(var i=addpictures.length;number>i;++i){
        var clone = addpicture.cloneNode(true);
        var details = clone.getElementsByClassName("details");
        details[0].innerText = "Picture " + (i+1);
        details[1].innerText = "Picture "  + (i+1) + " Description";
        clone.style.display = "none";
        const warning = clone.getElementsByClassName("warningpicdesc");
        var input = clone.getElementsByClassName("APDesc");
        console.log(input[0]);
        input[0].addEventListener('input',function(){
            var length = this.value.length;
            if(length==140){
                warning[0].style.display = "flex";
                console.log("7asal")
            }else{
                warning[0].style.display = "";
            }
        })
        addform.insertBefore(clone,addbutton);
    }
    var options = selectbutton.getElementsByTagName("option");
    while(options[0]){
        options[0].parentNode.removeChild(options[0]);
    }
    for(var i=0;addpictures.length>i;++i){
        var clone = document.createElement("option");
        clone.value = (i+1);
        clone.innerText = (i+1);
        selectbutton.appendChild(clone);
    }
    var addpictures = addform.getElementsByClassName("AddPicture");
    addpictures[0].style.display = "block";
})
selectbutton.addEventListener('change',function(){
    var addpictures = document.getElementsByClassName("AddPicture");
    addpictures[selectbutton.value-1].style.display = "block";
    for(var i=0;addpictures.length>i;++i){
        if(addpictures[i]!=addpictures[selectbutton.value-1]){
            addpictures[i].style.display = "none";
        }
    }
})
//placeholder for edit
var eventbutton = document.getElementsByClassName("Editprograms");
eventbutton[0].addEventListener('change',function(){
    var programname = document.getElementsByClassName("programname");
    programname[0].value=eventbutton[0].value;
})
//validation addform name
var Awarningname = document.getElementById("Awarningname");
var Ainputname = document.getElementById("Aname");
Ainputname.addEventListener('input',function(){
    var length = this.value.length;
    if(length==40){
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
    if(length==583){
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
    if(length==40){
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
    if(length==583){
        Ewarningdesc.style.display= "block";
    }else{
        Ewarningdesc.style.display ="";
    }
})
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

