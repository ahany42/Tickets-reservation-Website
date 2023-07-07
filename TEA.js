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


