// Nancy Buchko Law Office - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Don't prevent default for navigation to other pages
      if (this.pathname === window.location.pathname) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Make phone number clickable on mobile
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  phoneLinks.forEach(link => {
    link.style.cursor = 'pointer';
  });

  // Add some basic accessibility enhancements
  const mainContent = document.querySelector('main');
  if (mainContent) {
    mainContent.setAttribute('role', 'main');
  }

  const nav = document.querySelector('nav');
  if (nav) {
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Main Navigation');
  }
});

// Scroll to top functionality placeholder
window.addEventListener('scroll', function() {
  // This can be extended in the future if needed
  // For now, it serves as a placeholder for additional scroll-based features
});
