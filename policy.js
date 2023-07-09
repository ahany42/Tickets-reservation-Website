/* var titles = document.getElementsByClassName("title");
var contents = document.getElementsByClassName("content");
/* const hide = [
    {width: "0%"}
];
const hideduration = {
    duration: 1000,
    iterations:1,
}; 

for(var i=0;contents.length>i;++i){
    if(i!=0){
        contents[i]
    }
}
for(var i =0;titles.length>i;++i){
    titles[i].addEventListener('click',function(e){
        for(var j=0;contents.length>j;++j){
            if(titles[j]!=e.target){
                /* console.log(titles[i].innerHTML) 
                console.log(e)
                 /* contents[j].style.display = "none";  
                 contents[j].classList.add('contentextra');
            }else{
                /* contents[j].style.display = "block"; 
                contents[j].classList.remove('contentextra');
            }
        }
    })
} */
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
// Get all navigation links
const navLinks = document.querySelectorAll('.navigation a');

// Function to handle click event on navigation links
function handleClick(event) {
  // Remove 'active' class from all navigation links
  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  // Add 'active' class to the clicked link
  event.target.classList.add('active');
}

// Add click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', handleClick);
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