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

// Select DOM elements
const playButton = document.getElementById('playButton');
const audioElement = new Audio('assets/audio/Iconic_PianoI_Pieces_in_2024_1_hour_Relaxing_Piano_(by_James_Malikey).mp3');

// Add click event listener to toggle play/pause
let isPlaying = false;

playButton.addEventListener('click', () => {
  if (!isPlaying) {
    audioElement.play();
    playButton.textContent = '⏸'; // Pause icon
    isPlaying = true;
  } else {
    audioElement.pause();
    playButton.textContent = '▶'; // Play icon
    isPlaying = false;
  }
});

// Listen for audio end to reset the play button
audioElement.addEventListener('ended', () => {
  playButton.textContent = '▶';
  isPlaying = false;
});

// Contact-js section
// Select the form and input elements
const consultationForm = document.getElementById('consultation-form');

// Add event listener for form submission
consultationForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const formData = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    dateTime: document.getElementById('date-time').value.trim(),
    message: document.getElementById('message').value.trim(),
  };

  // Basic validation
  if (!formData.name || !formData.email || !formData.phone || !formData.dateTime || !formData.message) {
    alert('Please fill out all fields.');
    return;
  }

  // Simulate form submission (e.g., sending data via an API)
  console.log('Form Data Submitted:', formData);

  // Display a success message
  alert('Thank you! Your consultation request has been submitted.');

  // Reset the form
  consultationForm.reset();
});