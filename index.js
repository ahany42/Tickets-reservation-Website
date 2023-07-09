//Manage Hover in upcoming and past
var Uevents = document.getElementsByClassName("upcoming");
var Upimage0 = Uevents[0].getElementsByClassName("imagecard");
var Upimage1 = Uevents[0].getElementsByClassName("imagecard1");
var Upimage2 = Uevents[0].getElementsByClassName("imagecard2");
var UpNames = Uevents[0].getElementsByClassName("upcomingnames");
var UpButtons = Uevents[0].getElementsByClassName("button");
var Uicons = Uevents[0].getElementsByClassName("iconcontainer");
var Upinfo = Uevents[0].getElementsByClassName("info");
var UpDate = Uevents[0].getElementsByClassName("Date");
var Pevents = document.getElementsByClassName("past");
var Pimage0 = Pevents[0].getElementsByClassName("imagecard");
var Pimage1 = Pevents[0].getElementsByClassName("imagecard1");
var Pimage2 = Pevents[0].getElementsByClassName("imagecard2");
var PNames = Pevents[0].getElementsByClassName("pastnames");
var Picons = Pevents[0].getElementsByClassName("iconcontainer");
var Pinfo = Pevents[0].getElementsByClassName("info");
var PDate = Pevents[0].getElementsByClassName("Date");
Upimage0[0].addEventListener('mouseenter',function(e){
        e.target.classList.add('extra');
        Upinfo[0].classList.add("infoextra");
        UpDate[0].classList.add("infoextra");
    })
Upimage0[0].addEventListener('mouseleave',function(e){
        e.target.classList.remove('extra');
        Upinfo[0].classList.remove("infoextra");
        UpDate[0].classList.remove("infoextra");
    })
Upimage1[0].addEventListener('mouseenter',function(e){
    e.target.classList.add('extra');
    Upinfo[1].classList.add("infoextra");
    UpDate[1].classList.add("infoextra");
    })
Upimage1[0].addEventListener('mouseleave',function(e){
        e.target.classList.remove('extra');
        Upinfo[1].classList.remove("infoextra");
        UpDate[1].classList.remove("infoextra");
    })
Upimage2[0].addEventListener('mouseenter',function(e){
    e.target.classList.add('extra');
    Upinfo[2].classList.add("infoextra");
    UpDate[2].classList.add("infoextra");
    })
Upimage2[0].addEventListener('mouseleave',function(e){
        e.target.classList.remove('extra');
        Upinfo[2].classList.remove("infoextra");
        UpDate[2].classList.remove("infoextra");
    })
Pimage0[0].addEventListener('mouseenter',function(e){
        e.target.classList.add('extra');
        Pinfo[0].classList.add("infoextra");
        PDate[0].classList.add("infoextra");
    })
Pimage0[0].addEventListener('mouseleave',function(e){
        e.target.classList.remove('extra');
        Pinfo[0].classList.remove("infoextra");
        PDate[0].classList.remove("infoextra");
    })
Pimage1[0].addEventListener('mouseenter',function(e){
    e.target.classList.add('extra');
    Pinfo[1].classList.add("infoextra");
    PDate[1].classList.add("infoextra");
})
Pimage1[0].addEventListener('mouseleave',function(e){
        e.target.classList.remove('extra');
        Pinfo[1].classList.remove("infoextra");
        PDate[1].classList.remove("infoextra");
    })
Pimage2[0].addEventListener('mouseenter',function(e){
    e.target.classList.add('extra');
    Pinfo[2].classList.add("infoextra");
    PDate[2].classList.add("infoextra");
    })
Pimage2[0].addEventListener('mouseleave',function(e){
    e.target.classList.remove('extra');
    Pinfo[2].classList.remove("infoextra");
    PDate[2].classList.remove("infoextra");
    })
for(var i =0;UpNames.length>i;++i){
    UpNames[i].addEventListener('mouseenter',function(e){
        var index;
        var image;
        for(var j=0;UpNames.length>j;++j){
            if(e.target==UpNames[j]){
                index = j;
                break;
            }
        }
        if(index==0){
            image = Upimage0[0];
        }else if(index==1){
            image = Upimage1[0];
        }else if(index==2){
            image = Upimage2[0];
        }
        image.classList.add('extra');
        Upinfo[index].classList.add('infoextra');
        UpDate[index].classList.add("infoextra");
        if(window.matchMedia("(max-width:767px)").matches){
            console.log("ana 4a8al");
            Uicons[index].classList.add("iconextra");
        }else if(window.matchMedia("(min-width:768px) and (max-width:991px)").matches){
            Uicons[index].classList.add("iconextra");
        }
    })
    UpNames[i].addEventListener('mouseleave',function(e){
        var index;
        var image;
        for(var j=0;UpNames.length>j;++j){
            if(e.target==UpNames[j]){
                index = j;
                break;
            }
        }
        if(index==0){
            image = Upimage0[0];
        }else if(index==1){
            image = Upimage1[0];
        }else if(index==2){
            image = Upimage2[0];
        }
        image.classList.remove('extra');
        Upinfo[index].classList.remove('infoextra');
        UpDate[index].classList.remove("infoextra");
        if(window.matchMedia("(max-width:767px)").matches){
            Uicons[index].classList.remove("iconextra");
        }else if(window.matchMedia("(min-width:768px) and (max-width:991px)").matches){
            Uicons[index].classList.remove("iconextra");
        }
    })
}
for(var i =0;PNames.length>i;++i){
    PNames[i].addEventListener('mouseenter',function(e){
        var index;
        var image;
        for(var j=0;PNames.length>j;++j){
            if(e.target==PNames[j]){
                index = j;
                break;
            }
        }
        if(index==0){
            image = Pimage0[0];
        }else if(index==1){
            image = Pimage1[0];
        }else if(index==2){
            image = Pimage2[0];
        }
        image.classList.add('extra');
        Pinfo[index].classList.add('infoextra');
        PDate[index].classList.add("infoextra");
        if(window.matchMedia("(max-width:767px)").matches){
            Picons[index].classList.add("iconextra");
        }else if(window.matchMedia("(min-width:768px) and (max-width:991px)").matches){
            Picons[index].classList.add("iconextra");
        }
    })
    PNames[i].addEventListener('mouseleave',function(e){
        var index;
        var image;
        for(var j=0;PNames.length>j;++j){
            if(e.target==PNames[j]){
                index = j;
                break;
            }
        }
        if(index==0){
            image = Pimage0[0];
        }else if(index==1){
            image = Pimage1[0];
        }else if(index==2){
            image = Pimage2[0];
        }
        image.classList.remove('extra');
        Pinfo[index].classList.remove('infoextra');
        PDate[index].classList.remove("infoextra");
        if(window.matchMedia("(max-width:767px)").matches){
            Picons[index].classList.remove("iconextra");
        }else if(window.matchMedia("(min-width:768px) and (max-width:991px)").matches){
            Picons[index].classList.remove("iconextra");
        }
    })
}
for(var i =0;UpButtons.length>i;++i){
    UpButtons[i].addEventListener('mouseenter',function(e){
        var index;
        var image;
        for(var j=0;UpButtons.length>j;++j){
            if(e.target==UpButtons[j]){
                index = j;
                break;
            }
        }
        if(index==0){
            image = Upimage0[0];
        }else if(index==1){
            image = Upimage1[0];
        }else if(index==2){
            image = Upimage2[0];
        }
        image.classList.add('extra');
        Upinfo[index].classList.add('infoextra');
        UpDate[index].classList.add("infoextra");
    })
    UpButtons[i].addEventListener('mouseleave',function(e){
        var index;
        var image;
        for(var j=0;UpButtons.length>j;++j){
            if(e.target==UpButtons[j]){
                index = j;
                break;
            }
        }
        if(index==0){
            image = Upimage0[0];
        }else if(index==1){
            image = Upimage1[0];
        }else if(index==2){
            image = Upimage2[0];
        }
        image.classList.remove('extra');
        Upinfo[index].classList.remove('infoextra');
        UpDate[index].classList.remove("infoextra");
    })
}
//Menubar click
var menu = document.getElementById("bar");
var headeron = document.getElementById("headeron");
var isClicked = false;
menu.addEventListener('click',function(){
    if(isClicked){
        headeron.classList.remove("headeronextra");
        headeron.classList.add("headeroffextra");
        isClicked = false;
    }else{
        headeron.classList.remove("headeroffextra");
        headeron.style.display = "flex";
        headeron.classList.add("headeronextra");
        isClicked = true;
    }
})

 // code for click and indicate tab
 const navLinks = document.querySelectorAll('.navigation a');

  
  function handleClick(event) {
    
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    
    event.target.classList.add('active');
  }

  
  navLinks.forEach(link => {
    link.addEventListener('click', handleClick);
  });
   // code for scroll and indicate tab
  window.addEventListener('DOMContentLoaded', (event) => {
    
    const eventsSection = document.querySelector('#events');
     homeLink = document.querySelector('#main');

    function setActiveNavLink() {
      const scrollPosition = window.scrollY;
      const eventsSectionTop = eventsSection.offsetTop - 50; 
      if (scrollPosition >= eventsSectionTop) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === 'index.html#events') {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      } else {
        homeLink.classList.add('active');
        navLinks.forEach(link => {
            if(link.getAttribute('href') === 'index.html#main'){
                link.classList.add('active');
            }
          if (link.getAttribute('href') === 'index.html#events') {
            link.classList.remove('active');
          }
        });
      }
    }

    window.addEventListener('scroll', setActiveNavLink);
  });
  // code for click and indicate tab mobile
 const navLinks1 = document.querySelectorAll('.headeron a');

  
 function handleClick(event) {
   
   navLinks1.forEach(link => {
     link.classList.remove('active');
   });

   
   event.target.classList.add('active');
 }

 
 navLinks1.forEach(link => {
   link.addEventListener('click', handleClick);
 });
  // code for scroll and indicate tab
 window.addEventListener('DOMContentLoaded', (event) => {
   
   const eventsSection = document.querySelector('#events');
    homeLink = document.querySelector('#main');

   function setActiveNavLink() {
     const scrollPosition = window.scrollY;
     const eventsSectionTop = eventsSection.offsetTop - 50; 
     if (scrollPosition >= eventsSectionTop) {
       navLinks1.forEach(link => {
         if (link.getAttribute('href') === 'index.html#events') {
           link.classList.add('active');
         } else {
           link.classList.remove('active');
         }
       });
     } else {
       homeLink.classList.add('active');
       navLinks1.forEach(link => {
           if(link.getAttribute('href') === 'index.html#main'){
               link.classList.add('active');
           }
         if (link.getAttribute('href') === 'index.html#events') {
           link.classList.remove('active');
         }
       });
     }
   }

   window.addEventListener('scroll', setActiveNavLink);
 });


 // dark theme code
 var btn = document.getElementById("btn");
    var icon = document.getElementById("iconid");

    // Check if a stored theme exists
    var storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.body.classList.add("dark-theme");
      icon.classList.replace("fa-moon", "fa-sun");
    }

    btn.onclick = function () {
      document.body.classList.toggle("dark-theme");
      if (document.body.classList.contains("dark-theme")) {
        icon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "dark"); // Store theme
      } else {
        icon.classList.replace("fa-sun", "fa-moon");
        localStorage.removeItem("theme"); // Remove stored theme
      }
    };