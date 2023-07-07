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