
for(var i=0;events.length>i;++i) {
    if(events[i].style.display=="" /* || events[i].style.display=="flex" */){
        eventindex = i;
        console.log(eventindex);
        break;
    }
}
var pending = document.getElementsByClassName("pending");
var accepted = document.getElementsByClassName("accepted");
var rejected = document.getElementsByClassName("rejected");
var totalpending = pending[eventindex].getElementsByClassName("totalpending");
var pendingusers = pending[eventindex].getElementsByClassName("container-user");
totalpending[0].innerHTML = "Total: "+ pendingusers.length;
var totalaccepted = accepted[eventindex].getElementsByClassName("totalpending");
var acceptedusers = accepted[eventindex].getElementsByClassName("container-user");
totalaccepted[0].innerHTML = "Total: "+ acceptedusers.length;
var totalrejected = rejected[eventindex].getElementsByClassName("totalpending");
var rejectedusers = rejected[eventindex].getElementsByClassName("container-user");
totalrejected[0].innerHTML = "Total: "+ rejectedusers.length;
////// moving of users
var report = document.getElementById("report-container");
report.addEventListener('click',function(e){
    var clicked = e.target;
    var moreinfos = document.getElementsByClassName("moreinfo");
    var moreinfospans = document.getElementsByClassName("moreinfospan");
    var angles = document.getElementsByClassName("fa-angles-down");
    var expandinfos = document.getElementsByClassName("expandinfo");
    if(clicked.classList.contains("moreinfo")){
        console.log("ana 4a8al");
        var index = Array.from(moreinfos).indexOf(clicked);
        if(expandinfos[index].style.display=="none" || expandinfos[index].style.display==""){
            expandinfos[index].style.display = "grid";
        }else{
            expandinfos[index].style.display = "none";
        }
    }else if(clicked.classList.contains("moreinfospan")){
        var index = Array.from(moreinfospans).indexOf(clicked);
        if(expandinfos[index].style.display=="none" || expandinfos[index].style.display==""){
            expandinfos[index].style.display = "grid";
        }else{
            expandinfos[index].style.display = "none";
        }
    }else if(clicked.classList.contains("fa-angles-down")){
        var index = Array.from(angles).indexOf(clicked);
        if(expandinfos[index].style.display=="none" || expandinfos[index].style.display==""){
            expandinfos[index].style.display = "grid";
        }else{
            expandinfos[index].style.display = "none";
        }
    }
    
})
//Move from pending
report.addEventListener('click',function(e){
    var clicked = e.target;
    var parent = e.target.closest(".pending, .accepted, .rejected");
    var events = document.getElementsByClassName("eventcontainer");
    var users= document.getElementsByClassName("container-user");
    var pending = document.getElementsByClassName("pending");
    var accepted = document.getElementsByClassName("accepted");
    var rejected = document.getElementsByClassName("rejected");
    var rejectbuttons = document.getElementsByClassName("circle-reject");
    var rejectspans = document.getElementsByClassName("rejectspan");
    var rejecticons = document.getElementsByClassName("fa-xmark");
    var acceptbuttons = document.getElementsByClassName("circle-accept");
    var acceptspans = document.getElementsByClassName("acceptspan");
    var accepticons = document.getElementsByClassName("fa-check");
    var eventindex;
    for(var i=0;events.length>i;++i) {
        if(events[i].style.display=="" /* || events[i].style.display=="flex" */){
            eventindex = i;
            console.log(eventindex);
            break;
        }
    }
    //move to accepted
    if(clicked.classList.contains("circle-accept") && parent.classList.contains("pending")){
        var index = Array.from(acceptbuttons).indexOf(clicked);
        var move = users[index].cloneNode(true);
        var marks = move.getElementsByClassName("circle-reject");
        var text = marks[0].getElementsByTagName("span");
        text[0].innerHTML = "Move to Reject"; 
        accepted[eventindex].appendChild(move);
        users[index].remove();
    }else if(clicked.classList.contains("acceptspan")&& parent.classList.contains("pending")){
        var index = Array.from(acceptspans).indexOf(clicked);
        var move = users[index].cloneNode(true);
        var marks = move.getElementsByClassName("circle-reject");
        var text = marks[0].getElementsByTagName("span");
        text[0].innerHTML = "Move to Reject"; 
        accepted[eventindex].appendChild(move);
        users[index].remove();
    }else if(clicked.classList.contains("fa-check")&& parent.classList.contains("pending")){
        var index = Array.from(accepticons).indexOf(clicked);
        var move = users[index].cloneNode(true);
        var marks = move.getElementsByClassName("circle-reject");
        var text = marks[0].getElementsByTagName("span");
        text[0].innerHTML = "Move to Reject"; 
        accepted[eventindex].appendChild(move);
        users[index].remove();
    }
    //move to rejected
    else if(clicked.classList.contains("circle-reject") && parent.classList.contains("pending")){
        var index = Array.from(rejectbuttons).indexOf(clicked);
        var move = users[index].cloneNode(true);
        var marks = move.getElementsByClassName("circle-accept");
        var text = marks[0].getElementsByTagName("span");
        text[0].innerHTML = "Move to Accept"; 
        rejected[eventindex].appendChild(move);
        users[index].remove();
    }else if(clicked.classList.contains("rejectspan")&& parent.classList.contains("pending")){
        var index = Array.from(rejectspans).indexOf(clicked);
        var move = users[index].cloneNode(true);
        var marks = move.getElementsByClassName("circle-accept");
        var text = marks[0].getElementsByTagName("span");
        text[0].innerHTML = "Move to Accept"; 
        rejected[eventindex].appendChild(move);
        users[index].remove();
    }else if(clicked.classList.contains("fa-xmark")&& parent.classList.contains("pending")){
        var index = Array.from(rejecticons).indexOf(clicked);
        var move = users[index].cloneNode(true);
        var marks = move.getElementsByClassName("circle-accept");
        var text = marks[0].getElementsByTagName("span");
        text[0].innerHTML = "Move to Accept"; 
        rejected[eventindex].appendChild(move);
        users[index].remove();
    }
    //Move from accepted to reject
    else if(clicked.classList.contains("circle-reject") && parent.classList.contains("accepted")){
        var index = Array.from(rejectbuttons).indexOf(clicked);
        var move = users[index].cloneNode(true);
        var text = move.getElementsByClassName("acceptspan");
        text[0].innerHTML = "Move to Accept";
        rejected[eventindex].appendChild(move);
        users[index].remove();
    }
    else if(clicked.classList.contains("rejectspan") && parent.classList.contains("accepted")){
        var index = Array.from(rejectspans).indexOf(clicked);
        var move = users[index].cloneNode(true);
        var text = move.getElementsByClassName("acceptspan");
        text[0].innerHTML = "Move to Accept";
        rejected[eventindex].appendChild(move);
        users[index].remove();
    }
    else if(clicked.classList.contains("fa-xmark") && parent.classList.contains("accepted")){
        var index = Array.from(rejecticons).indexOf(clicked);
        var move = users[index].cloneNode(true);
        var text = move.getElementsByClassName("acceptspan");
        text[0].innerHTML = "Move to Accept";
        rejected[eventindex].appendChild(move);
        users[index].remove();
    }
    //Move from rejected to accepted
    else if(clicked.classList.contains("circle-accept") && parent.classList.contains("rejected")){
        var index = Array.from(acceptbuttons).indexOf(clicked);
        var move = users[index].cloneNode(true);
        var text = move.getElementsByClassName("rejectspan");
        text[0].innerHTML = "Move to Reject";
        users[index].remove();
        accepted[eventindex].appendChild(move);
    }
    else if(clicked.classList.contains("acceptspan") && parent.classList.contains("rejected")){
        console.log("4a8al");
        var index = Array.from(acceptspans).indexOf(clicked);
        var move = users[index].cloneNode(true);
        var text = move.getElementsByClassName("rejectspan");
        text[0].innerHTML = "Move to Reject";
        users[index].remove();
        accepted[eventindex].appendChild(move);
       
    }
    else if(clicked.classList.contains("fa-check") && parent.classList.contains("rejected")){
        var index = Array.from(accepticons).indexOf(clicked);
        var move = users[index].cloneNode(true);
        var text = move.getElementsByClassName("rejectspan");
        text[0].innerHTML = "Move to Reject";
        users[index].remove();
        accepted[eventindex].appendChild(move);
        
    }
    ///// total count of container change
    var totalpending = pending[eventindex].getElementsByClassName("totalpending");
    var pendingusers = pending[eventindex].getElementsByClassName("container-user");
    totalpending[0].innerHTML = "Total: "+ pendingusers.length;
    var totalaccepted = accepted[eventindex].getElementsByClassName("totalpending");
    var acceptedusers = accepted[eventindex].getElementsByClassName("container-user");
    totalaccepted[0].innerHTML = "Total: "+ acceptedusers.length;
    var totalrejected = rejected[eventindex].getElementsByClassName("totalpending");
    var rejectedusers = rejected[eventindex].getElementsByClassName("container-user");
    totalrejected[0].innerHTML = "Total: "+ rejectedusers.length;

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
