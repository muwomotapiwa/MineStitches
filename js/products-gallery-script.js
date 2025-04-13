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