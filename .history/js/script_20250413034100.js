// Scroll-to-Top Button
document.querySelector('.scroll-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Navbar Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Music Player Logic
const playButton = document.getElementById('playButton');
let audioElement;

// Check if an audio element already exists in localStorage
if (localStorage.getItem('audioState') === 'playing') {
  audioElement = new Audio('assets/audio/Iconic_PianoI_Pieces_in_2024_1_hour_Relaxing_Piano_(by_James_Malikey).mp3');
  audioElement.play();
  playButton.textContent = '⏸'; // Pause icon
} else {
  audioElement = new Audio('assets/audio/Iconic_PianoI_Pieces_in_2024_1_hour_Relaxing_Piano_(by_James_Malikey).mp3');
}

// Add click event listener to toggle play/pause
let isPlaying = localStorage.getItem('audioState') === 'playing';

playButton.addEventListener('click', () => {
  if (!isPlaying) {
    audioElement.play();
    playButton.textContent = '⏸'; // Pause icon
    isPlaying = true;
    localStorage.setItem('audioState', 'playing'); // Save state to localStorage
  } else {
    audioElement.pause();
    playButton.textContent = '▶'; // Play icon
    isPlaying = false;
    localStorage.setItem('audioState', 'paused'); // Save state to localStorage
  }
});

// Listen for audio end to reset the play button
audioElement.addEventListener('ended', () => {
  playButton.textContent = '▶';
  isPlaying = false;
  localStorage.setItem('audioState', 'paused');
});

// Contact Form Submission
const consultationForm = document.getElementById('consultation-form');

if (consultationForm) {
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
}

// Function to show a specific section and hide others
function showSection(sectionId) {
  const sections = document.querySelectorAll('.page-section');
  sections.forEach((section) => {
    section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}

// Show the Home section by default
window.onload = () => {
  showSection('home');
};

// About Us Audio Playback
const aboutUsAudioButton = document.getElementById('aboutUsAudioButton');
const aboutUsAudio = new Audio('assets/audio/aboutusvoice.mp3');

let isAudioPlaying = false;

aboutUsAudioButton.addEventListener('click', () => {
  if (!isAudioPlaying) {
    aboutUsAudio.play();
    aboutUsAudioButton.textContent = '⏸'; // Pause icon
    isAudioPlaying = true;
  } else {
    aboutUsAudio.pause();
    aboutUsAudioButton.textContent = '▶'; // Play icon
    isAudioPlaying = false;
  }
});

// Listen for audio end to reset the play button
aboutUsAudio.addEventListener('ended', () => {
  aboutUsAudioButton.textContent = '▶';
  isAudioPlaying = false;
});