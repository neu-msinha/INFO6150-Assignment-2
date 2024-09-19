const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();

// Get the audio element and control button
const audio = document.getElementById('background-audio');
const controlButton = document.getElementById('audioControl');

// Add event listener to the anchor button
controlButton.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default anchor behavior

    // Check if audio is playing
    if (audio.paused) {
        audio.play();
        controlButton.textContent = 'Pause Audio';  // Change button text to "Pause"
    } else {
        audio.pause();
        controlButton.textContent = 'Play Audio';   // Change button text back to "Play"
    }
});

