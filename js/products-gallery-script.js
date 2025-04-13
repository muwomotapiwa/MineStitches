// Function to show a specific section and hide others
function showSection(sectionId) {
  const sections = document.querySelectorAll('.category-section');
  sections.forEach((section) => {
    section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}

// Show the first category section by default
window.onload = () => {
  showSection('modern-traditional');
};

// View More Button Logic (Example)
document.querySelectorAll('.view-more-btn').forEach((button) => {
  button.addEventListener('click', () => {
    alert('Loading more images...');
    // Implement logic to load more images dynamically
  });
});

// Function to handle "View More" button
document.querySelector('.view-more-btn').addEventListener('click', () => {
  const hiddenCards = document.querySelectorAll('.gallery-card[data-visible="false"]');
  
  // Show up to 6 more images
  for (let i = 0; i < Math.min(6, hiddenCards.length); i++) {
    hiddenCards[i].setAttribute('data-visible', 'true');
    hiddenCards[i].style.display = 'block'; // Ensure the card is visible
  }

  // If no more hidden cards, disable the button
  if (hiddenCards.length <= 6) {
    document.querySelector('.view-more-btn').style.display = 'none';
  }
});