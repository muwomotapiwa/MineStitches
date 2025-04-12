document.querySelector('.scroll-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Select DOM elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add click event listener to toggle the dropdown
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});