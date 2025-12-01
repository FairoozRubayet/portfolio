//hide loader

function hideLoaderNow() {
  var loader = document.getElementById('simplePageLoader');
  if (loader) {
    console.log("Hiding loader...");
    
    // Method 1: Use CSS class
    loader.classList.add('hide-loader');
    
    // Method 2: Force with inline styles
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
    
    // Method 3: Remove from page after hiding
    setTimeout(function() {
      loader.style.display = 'none';
      
      // Method 4: Remove from DOM completely
      setTimeout(function() {
        if (loader && loader.parentNode) {
          loader.parentNode.removeChild(loader);
          console.log("Loader removed from DOM");
        }
      }, 500);
    }, 500);
  }
}

// Hide loader when page loads
window.addEventListener('load', function() {
  console.log("Page loaded, hiding loader...");
  hideLoaderNow();
});

// Safety: Hide loader after 3 seconds MAX
setTimeout(function() {
  console.log("Safety timeout: Hiding loader...");
  hideLoaderNow();
}, 3000);

// Hide loader when DOM is ready (faster)
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM ready, will hide loader soon...");
  setTimeout(hideLoaderNow, 1000);
});

// ===========================================
// 2. REGULAR PAGE FUNCTIONALITY
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
  console.log("Setting up page functionality...");
  
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
      if (mobileNavToggle) {
        mobileNavToggle.classList.add('bi-list');
        mobileNavToggle.classList.remove('bi-x');
      }
    });
  });

  // Header scroll effect
  const header = document.getElementById('header');
  const scrollTop = document.getElementById('scroll-top');
  
  function toggleHeaderScroll() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
      if (scrollTop) scrollTop.classList.add('active');
    } else {
      header.classList.remove('scrolled');
      if (scrollTop) scrollTop.classList.remove('active');
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

  // Simple hover effects for buttons
  var buttons = document.querySelectorAll('.btn');
  buttons.forEach(function(btn) {
    btn.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
  
  console.log("Page functionality setup complete!");
});

// Back to Top functionality
document.addEventListener('DOMContentLoaded', function() {
  const backToTopBtn = document.getElementById('backToTop');
  
  if (backToTopBtn) {
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
  }
});

// ===========================================
// 3. EMERGENCY FIX - HIDE LOADER NO MATTER WHAT
// ===========================================

// This runs immediately and will hide loader
(function emergencyHide() {
  console.log("Emergency hide function running...");
  
  // Check if loader exists
  var checkLoader = setInterval(function() {
    var loader = document.getElementById('simplePageLoader');
    if (loader) {
      console.log("Loader found, hiding it...");
      
      // Force hide immediately
      loader.style.cssText = 'opacity: 0 !important; visibility: hidden !important; display: none !important;';
      
      // Try to remove from DOM
      setTimeout(function() {
        if (loader.parentNode) {
          loader.parentNode.removeChild(loader);
          console.log("Loader removed!");
        }
        clearInterval(checkLoader);
      }, 100);
    }
  }, 100); // Check every 100ms
  
  // Stop checking after 5 seconds
  setTimeout(function() {
    clearInterval(checkLoader);
    console.log("Stopped checking for loader");
  }, 5000);
})();
