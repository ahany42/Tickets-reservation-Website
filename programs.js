//images handling
var gallery = document.getElementsByClassName("gallery");
if(window.matchMedia("(max-width:767px)").matches || window.matchMedia("(min-width:768px) and (max-width:991px)").matches || window.matchMedia("(min-width: 992px)and (max-width:1280px)").matches){
  console.log("ana bmatch");
  gallery[1].innerHTML = '<img class="imgright" src="WhatsApp Image 2023-07-04 at 1.36.47 PM (1).jpeg"><div class="gallerytxt">Our CEO, Ahmed Samir, was welcoming everyone to the company and proceeded by letting them know about the work procedure.</div>'
  gallery[3].innerHTML = '<img class="imgright" src="WhatsApp Image 2023-07-04 at 1.36.46 PM (2).jpeg"><div class="gallerytxt">The academy is not only all about work;yet, it is a whole experience where you get to build a community and have a blast</div>'
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
