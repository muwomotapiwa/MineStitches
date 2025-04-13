// Scroll-to-Top Button
document.querySelector('.scroll-top')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Navbar Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close the hamburger menu when a navigation link is clicked
  document.querySelectorAll('.nav-links li a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// Music Player Logic
const playButton = document.getElementById('playButton');
if (playButton) {
  let audioElement;
  let isPlaying = localStorage.getItem('audioState') === 'playing';

  // Initialize audio
  audioElement = new Audio('assets/audio/Iconic_PianoI_Pieces_in_2024_1_hour_Relaxing_Piano_(by_James_Malikey).mp3');
  
  if (isPlaying) {
    audioElement.play().catch(e => console.log("Audio play failed:", e));
    playButton.textContent = '⏸';
  }

  playButton.addEventListener('click', () => {
    if (!isPlaying) {
      audioElement.play().then(() => {
        playButton.textContent = '⏸';
        isPlaying = true;
        localStorage.setItem('audioState', 'playing');
      }).catch(e => console.log("Audio play failed:", e));
    } else {
      audioElement.pause();
      playButton.textContent = '▶';
      isPlaying = false;
      localStorage.setItem('audioState', 'paused');
    }
  });

  audioElement.addEventListener('ended', () => {
    playButton.textContent = '▶';
    isPlaying = false;
    localStorage.setItem('audioState', 'paused');
  });
}

// Contact Form Submission
const consultationForm = document.getElementById('consultation-form');
if (consultationForm) {
  consultationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      dateTime: document.getElementById('date-time').value.trim(),
      message: document.getElementById('message').value.trim(),
    };

    if (!formData.name || !formData.email || !formData.phone || !formData.dateTime || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }

    console.log('Form Data Submitted:', formData);
    alert('Thank you! Your consultation request has been submitted.');
    consultationForm.reset();
  });
}

// Section Management
function showSection(sectionId) {
  const sections = document.querySelectorAll('.page-section');
  sections.forEach((section) => {
    section.style.display = 'none';
  });

  const sectionToShow = document.getElementById(sectionId);
  if (sectionToShow) {
    sectionToShow.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (sectionId === 'products-gallery') {
      initProductsGallery();
    }
  }
}

// Products Gallery Functions
function initProductsGallery() {
  showCategory('modern-traditional');
  
  document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', function() {
      document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      this.classList.add('active');
      
      const categoryId = this.getAttribute('data-section');
      showCategory(categoryId);
    });
  });
  
  document.querySelectorAll('.view-more-btn').forEach(button => {
    button.addEventListener('click', function() {
      const categorySection = this.closest('.category-section');
      const cards = categorySection.querySelectorAll('.gallery-card');
      
      cards.forEach(card => {
        card.style.display = 'block';
      });
      
      this.style.display = 'none';
    });
  });
}

function showCategory(categoryId) {
  document.querySelectorAll('.category-section').forEach(section => {
    section.style.display = 'none';
  });
  
  const categoryToShow = document.getElementById(categoryId);
  if (categoryToShow) {
    categoryToShow.style.display = 'block';
    initViewMore(categoryToShow);
  }
}

function initViewMore(categorySection) {
  const cards = categorySection.querySelectorAll('.gallery-card');
  const viewMoreBtn = categorySection.querySelector('.view-more-btn');
  
  cards.forEach((card, index) => {
    card.style.display = index < 8 ? 'block' : 'none';
  });
  
  viewMoreBtn.style.display = cards.length > 8 ? 'block' : 'none';
  
  // Add lazy loading to images
  categorySection.querySelectorAll('.gallery-image').forEach(img => {
    img.loading = 'lazy';
  });
}

// About Us Audio Playback
const aboutUsAudioButton = document.getElementById('aboutUsAudioButton');
if (aboutUsAudioButton) {
  const aboutUsAudio = new Audio('assets/audio/aboutusvoice.mp3');
  let isAudioPlaying = false;

  aboutUsAudioButton.addEventListener('click', () => {
    if (!isAudioPlaying) {
      aboutUsAudio.play().then(() => {
        aboutUsAudioButton.textContent = '⏸';
        isAudioPlaying = true;
      }).catch(e => console.log("Audio play failed:", e));
    } else {
      aboutUsAudio.pause();
      aboutUsAudioButton.textContent = '▶';
      isAudioPlaying = false;
    }
  });

  aboutUsAudio.addEventListener('ended', () => {
    aboutUsAudioButton.textContent = '▶';
    isAudioPlaying = false;
  });
}

// Initialize the page
window.addEventListener('DOMContentLoaded', () => {
  showSection('home');
  
  // Activate first category button if on products-gallery page
  if (window.location.hash === '#products-gallery') {
    showSection('products-gallery');
  }
  
  // Add active class to first category button
  document.querySelector('.category-btn')?.classList.add('active');
  
  // Set active nav link
  document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', function() {
      document.querySelectorAll('.nav-links li a').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
});