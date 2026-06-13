// Particles.js configuration
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_n": 4
      },
      "remove": {
        "particles_n": 2
      }
    }
  },
  "retina_detect": true
});

// Portfolio Filtering
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      
      const filterValue = button.getAttribute('data-filter');
      
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
          // Add fade-in effect
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 100);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  // Initialize AOS-like animations for sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        // Remove observer after animation to prevent performance issues
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe sections for fade-in animation
  const sections = document.querySelectorAll('.about-section, .experience-section, .skills-section, .portfolio-section, .clients-section, .contact-section');
  sections.forEach((section, index) => {
    section.classList.add('fade-in-up');
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    observer.observe(section);
    
    // Add delay based on section index
    setTimeout(() => {
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }, index * 100);
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          const navLinks = document.querySelector('.nav-links');
          const hamburger = document.querySelector('.hamburger');
          if (navLinks && hamburger) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
          }
        }
      }
    });
  });
  
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }
  
  // Header scroll effect
  const header = document.querySelector('nav');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Form submission handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Simple validation
      if (!name || !email || !message) {
        alert('Please fill in all required fields');
        return;
      }
      
      // Here you would typically send the form data to a server
      // For now, we'll show a success message
      alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon.`);
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Initialize portfolio items with staggered animation
  portfolioItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, index * 100);
  });
});

// 3D effect enhancement on mouse move for certain elements
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / window.innerWidth - 0.5;
  const mouseY = e.clientY / window.innerHeight - 0.5;
  
  // Apply subtle 3D tilt to certain elements
  const tiltElements = document.querySelectorAll('.profile-3d, .image-3d, .portfolio-3d');
  
  tiltElements.forEach(element => {
    const tiltX = mouseY * 10; // Reduced sensitivity
    const tiltY = mouseX * 10;
    
    element.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  });
});

// Reset 3D effect when mouse leaves
document.addEventListener('mouseleave', () => {
  const tiltElements = document.querySelectorAll('.profile-3d, .image-3d, .portfolio-3d');
  
  tiltElements.forEach(element => {
    element.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});