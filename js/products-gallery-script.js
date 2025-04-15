// Function to show a specific section and hide others
function showSection(sectionId) {
  const sections = document.querySelectorAll('.category-section');
  sections.forEach((section) => {
    section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';

  // Reset view more functionality for the active section
  setupViewMore(sectionId);
}

// Function to set up view more functionality for a section
function setupViewMore(sectionId) {
  const section = document.getElementById(sectionId);
  const cards = section.querySelectorAll('.gallery-card');
  const viewMoreBtn = section.querySelector('.view-more-btn');

  // Initially hide all cards beyond the first 8
  cards.forEach((card, index) => {
    if (index >= 8) {
      card.style.display = 'none';
    } else {
      card.style.display = 'block';
    }
  });

  // Show view more button only if there are more than 8 cards
  viewMoreBtn.style.display = cards.length > 8 ? 'block' : 'none';

  // Set up click handler for view more button
  viewMoreBtn.addEventListener('click', () => {
    // Show all hidden cards
    cards.forEach(card => {
      card.style.display = 'block';
    });
    // Hide the view more button after showing all
    viewMoreBtn.style.display = 'none';
  });
}

// Show the first category section by default
window.onload = () => {
  showSection('modern-traditional');

  // Set up event listeners for category buttons
  document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', function () {
      const targetSection = this.getAttribute('onclick').match(/'([^']+)'/)[1];
      showSection(targetSection);
    });
  });
};

// Scroll handling for hiding category navigation on mobile
let lastScrollPosition = 0;
const categoryNav = document.querySelector('.category-navigation');
const mobileBreakpoint = 760;

function handleScroll() {
  const currentScrollPosition = window.pageYOffset;

  if (window.innerWidth <= mobileBreakpoint) {
    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
      // Scrolling down
      categoryNav.classList.add('hide-on-scroll');
    } else {
      // Scrolling up
      categoryNav.classList.remove('hide-on-scroll');
    }
  }

  lastScrollPosition = currentScrollPosition;
}

window.addEventListener('scroll', handleScroll);

// Re-evaluate scroll behavior on window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > mobileBreakpoint) {
    categoryNav.classList.remove('hide-on-scroll');
  }
});