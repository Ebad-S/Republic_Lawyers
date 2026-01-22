/**
 * Republic Lawyers - Main JavaScript
 * Handles animations, interactions, and form submissions
 */

// ===== Mobile Menu Toggle =====
(function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (!menuToggle || !mainNav) return;
  
  menuToggle.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    mainNav.classList.toggle('is-open');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = isExpanded ? '' : 'hidden';
  });
  
  // Close menu when clicking nav links
  const navLinks = mainNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
  
  // Handle dropdown in mobile menu
  const dropdownItems = document.querySelectorAll('.nav-item-dropdown');
  dropdownItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    
    if (window.innerWidth <= 768) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        item.classList.toggle('is-open');
      });
    }
  });
})();

// ===== On-Scroll Reveal Animation =====
(function initScrollReveal() {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    // If user prefers reduced motion, show all elements immediately
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }
  
  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Optionally unobserve after reveal
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
})();

// ===== FAQ Accordion =====
(function initFAQAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      const answer = this.nextElementSibling;
      
      // Close all other FAQs (optional - remove if you want multiple open at once)
      faqQuestions.forEach(q => {
        if (q !== this) {
          q.setAttribute('aria-expanded', 'false');
          q.nextElementSibling.hidden = true;
        }
      });
      
      // Toggle current FAQ
      this.setAttribute('aria-expanded', !isExpanded);
      answer.hidden = isExpanded;
    });
  });
})();

// ===== Contact Form Handler =====
(function initContactForm() {
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('form-success');
  
  if (!form) return;
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    const submitBtn = form.querySelector('.form-submit');
    const originalBtnText = submitBtn.textContent;
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    try {
      // Here you would send the form data to your backend
      // For now, we'll simulate a successful submission
      
      // Example using fetch (uncomment and configure for production):
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) throw new Error('Form submission failed');
      */
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      if (successMessage) {
        successMessage.hidden = false;
        successMessage.style.background = '#d4edda';
        successMessage.style.color = '#155724';
        successMessage.style.padding = 'var(--space-md)';
        successMessage.style.borderRadius = 'var(--border-radius)';
        successMessage.style.marginTop = 'var(--space-md)';
        successMessage.style.textAlign = 'center';
      }
      
      // Reset form
      form.reset();
      
      // Scroll to success message
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Sorry, there was an error submitting your form. Please try calling us directly at (02) 8626 5171.');
    } finally {
      // Re-enable button
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  });
})();

// ===== Smooth Scroll for Anchor Links =====
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Ignore empty anchors
      if (href === '#' || href === '#!') return;
      
      const target = document.querySelector(href);
      if (!target) return;
      
      e.preventDefault();
      
      // Get header height for offset
      const header = document.querySelector('.site-header');
      const trustStrip = document.querySelector('.trust-strip');
      const offset = (header?.offsetHeight || 0) + (trustStrip?.offsetHeight || 0);
      
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
})();

// ===== Service Card Accessibility Enhancement =====
(function enhanceServiceCards() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    // Make entire card clickable
    card.addEventListener('click', function(e) {
      // Don't trigger if clicking on the link itself
      if (e.target.tagName === 'A' || e.target.closest('a')) return;
      
      const link = this.querySelector('.service-card-link');
      if (link) {
        link.click();
      }
    });
    
    // Add keyboard support
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const link = this.querySelector('.service-card-link');
        if (link) {
          link.click();
        }
      }
    });
  });
})();

// ===== Add current year to footer =====
(function updateCopyrightYear() {
  const yearElements = document.querySelectorAll('.footer-bottom p');
  yearElements.forEach(el => {
    if (el.textContent.includes('©')) {
      el.textContent = el.textContent.replace(/© \d{4}/, `© ${new Date().getFullYear()}`);
    }
  });
})();

// ===== Console message for developers =====
console.log('%cRepublic Lawyers', 'font-size: 20px; font-weight: bold; color: #1a365d;');
console.log('%cWebsite built with modern, accessible web standards.', 'font-size: 12px; color: #4a5568;');

// ===== Performance logging (development only) =====
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  window.addEventListener('load', () => {
    if (window.performance && window.performance.timing) {
      const timing = window.performance.timing;
      const loadTime = timing.loadEventEnd - timing.navigationStart;
      console.log(`%cPage Load Time: ${loadTime}ms`, 'color: #38a169; font-weight: bold;');
    }
  });
}

