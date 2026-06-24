/* ============================================
   PORTFOLIO WIREFRAME - JAVASCRIPT
   Sticky nav · Smooth scroll · Typing animation
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- SMOOTH SCROLL NAV LINKS ----------
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  const navbarToggle = document.getElementById('navbar-toggle');
  const navbarLinks = document.getElementById('navbar-links');

  // ---------- HAMBURGER TOGGLE ----------
  navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarLinks.classList.toggle('open');
  });

  // Close menu when a nav link is clicked (mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbarToggle.classList.remove('active');
      navbarLinks.classList.remove('open');
    });
  });

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ---------- ACTIVE NAV ON SCROLL ----------
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => navObserver.observe(section));

  // ---------- TYPING ANIMATION PLACEHOLDER ----------
  const typingElement = document.getElementById('typing-text');
  const roles = [
    'Software Engineer',
    'Unity Game Developer',
    'Full Stack Developer',
    'Problem Solver'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeRole() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1500; // pause at end
      } else {
        typingSpeed = 80;
      }
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 300; // pause before next word
      } else {
        typingSpeed = 40;
      }
    }

    setTimeout(typeRole, typingSpeed);
  }

  typeRole();

  // ---------- FOOTER SMOOTH SCROLL ----------
  const footerLinks = document.querySelectorAll('.footer-link');
  footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ---------- HERO CTA BUTTONS ----------
  const heroButtons = document.querySelectorAll('.hero-buttons .btn');
  heroButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.textContent.trim();
      if (text === 'View Projects') {
        document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
      } else if (text === 'Contact Me') {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
