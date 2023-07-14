var add =document.getElementById("add");
var edit = document.getElementById("edit");
var addform = document.getElementById("Addform");
var editform = document.getElementById("Editform");
var forms = document.getElementsByClassName("form");
var report = document.getElementById("report-container");
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
        clone.style.display = "none";
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