// main.js - Interactive functionality

document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile navigation toggle
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navmenu = document.querySelector('#navmenu');
  
  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', function(e) {
      e.preventDefault();
      navmenu.classList.toggle('active');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('#navmenu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navmenu.classList.remove('active');
      mobileNavToggle.classList.add('bi-list');
      mobileNavToggle.classList.remove('bi-x');
    });
  });

  // Header scroll effect
  const header = document.getElementById('header');
  const scrollTop = document.getElementById('scroll-top');
  
  function toggleHeaderScroll() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
      scrollTop.classList.add('active');
    } else {
      header.classList.remove('scrolled');
      scrollTop.classList.remove('active');
    }
  }

  window.addEventListener('scroll', toggleHeaderScroll);
  toggleHeaderScroll(); // Initialize on load

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Initialize AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  // Portfolio lightbox (if using GLightbox)
  if (typeof GLightbox !== 'undefined') {
    const lightbox = GLightbox({
      selector: '.glightbox'
    });
  }

  // Add loading animation
  document.body.classList.add('loaded');
});

// Back to Top functionality
const backToTopBtn = document.getElementById('backToTop');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

// Scroll to top when clicked
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});