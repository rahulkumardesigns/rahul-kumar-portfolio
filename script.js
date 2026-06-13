// Enhanced Portfolio Script with GSAP, Lenis, and Interactive Features

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
});

// Use requestAnimationFrame to update Lenis
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP Configuration
gsap.registerPlugin(ScrollTrigger);

// Particles.js configuration with mouse interaction
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#00f3ff", "#ff006e", "#8338ec", "#ff9f1c", "#ffffff"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.6,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.5,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
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
      "speed": 1,
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
        "mode": "repulse"
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

// Cursor Follower
const cursor = document.createElement('div');
cursor.classList.add('cursor-follower');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2,
    ease: 'power2.out'
  });
});

// Enhanced 3D effect with GSAP
document.addEventListener('mousemove', (e) => {
  const mouseX = (e.clientX / window.innerWidth - 0.5) * 30;
  const mouseY = (e.clientY / window.innerHeight - 0.5) * 30;
  
  // Apply to 3D elements with different intensities
  gsap.to('.profile-3d', {
    rotationY: mouseX,
    rotationX: mouseY,
    duration: 1,
    ease: 'power2.out'
  });
  
  gsap.to('.portfolio-3d, .image-3d', {
    rotationY: mouseX * 0.5,
    rotationX: mouseY * 0.5,
    duration: 1,
    ease: 'power2.out'
  });
});

// Reset 3D effect when mouse leaves
document.addEventListener('mouseleave', () => {
  gsap.to('.profile-3d, .portfolio-3d, .image-3d', {
    rotationY: 0,
    rotationX: 0,
    duration: 1,
    ease: 'power2.out'
  });
});

// Animated Entrance for Home Section
window.addEventListener('load', () => {
  const tl = gsap.timeline();
  
  tl.from('.home-content h1', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })
  .from('.home-content .subtitle', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.5')
  .from('.home-content .social-icons a', {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1
  }, '-=0.3')
  .from('.home-content .btn-primary', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.5')
  .from('.profile-3d-container', {
    scale: 0.5,
    opacity: 0,
    duration: 1.2,
    ease: 'back.out(1.7)'
  }, '-=1');
});

// Section Animations with ScrollTrigger
document.addEventListener('DOMContentLoaded', function() {
  // About Section Animation
  gsap.from('.about-content', {
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top 80%',
      end: 'top 20%',
      scrub: true
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });
  
  // Experience Timeline Animation
  gsap.from('.timeline-item', {
    scrollTrigger: {
      trigger: '.experience-section',
      start: 'top 80%',
      end: 'top 20%',
      scrub: true
    },
    y: 40,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power3.out'
  });
  
  // Skills Section Animation
  gsap.from('.skill-bar-fill', {
    scrollTrigger: {
      trigger: '.skills-section',
      start: 'top 80%',
      end: 'top 20%',
      scrub: true
    },
    width: '0%',
    duration: 1.5,
    ease: 'power3.out',
    stagger: {
      amount: 0.5
    }
  });
  
  // Portfolio Items Animation
  gsap.from('.portfolio-item', {
    scrollTrigger: {
      trigger: '.portfolio-section',
      start: 'top 80%',
      end: 'top 20%',
      scrub: true
    },
    y: 60,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power3.out'
  });
  
  // Client Logos Hover Effect
  gsap.utils.toArray('.client-logo').forEach(logo => {
    logo.addEventListener('mouseenter', () => {
      gsap.to(logo, {
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(logo.querySelector('img'), {
        filter: 'brightness(1.2) contrast(1.1)',
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    logo.addEventListener('mouseleave', () => {
      gsap.to(logo, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(logo.querySelector('img'), {
        filter: 'brightness(1) contrast(1)',
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
  
  // Portfolio Filtering with GSAP
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
          gsap.fromTo(item, 
            { opacity: 0, y: 20, scale: 0.9 },
            { 
              opacity: 1, 
              y: 0, 
              scale: 1, 
              duration: 0.6, 
              ease: 'power3.out',
              delay: Math.random() * 0.2
            }
          );
          item.style.display = 'block';
        } else {
          gsap.to(item, {
            opacity: 0,
            y: 20,
            scale: 0.9,
            duration: 0.4,
            ease: 'power2.in',
            onComplete: () => {
              item.style.display = 'none';
            }
          });
        }
      });
    });
  });
  
  // Initialize portfolio items with staggered animation
  portfolioItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px) scale(0.9)';
    
    gsap.to(item, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'power3.out',
      delay: index * 0.05
    });
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          gsap.to(window, {
            scrollTo: {
              y: targetElement,
              offsetY: 80
            },
            duration: 1.2,
            ease: 'power3.out'
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
      const isOpen = navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
      
      // Animate hamburger to X
      gsap.to(hamburger.querySelectorAll('span'), {
        rotation: isOpen ? 45 : 0,
        y: isOpen => [8, -8] : [0, 0],
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  }
  
  // Header scroll effect
  const header = document.querySelector('nav');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      gsap.to(header, {
        backgroundColor: 'rgba(17, 17, 17, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        duration: 0.5
      });
    } else {
      gsap.to(header, {
        backgroundColor: 'rgba(17, 17, 17, 0.8)',
        backdropFilter: 'blur(5px)',
        boxShadow: 'none',
        duration: 0.5
      });
    }
  });
  
  // Form submission handling with animation
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
      
      // Animate submit button
      const submitBtn = this.querySelector('.submit-btn');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
      submitBtn.style.backgroundColor = '#10b981';
      
      // Here you would typically send the form data to a server
      // For now, we'll show a success message
      setTimeout(() => {
        alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon.`);
        
        // Reset form
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.style.backgroundColor = '';
      }, 1500);
    });
  }
  
  // Add hover tilt effect to cards
  const tiltElements = document.querySelectorAll('.about-card, .experience-card, .skill-card, .portfolio-card, .client-card');
  
  tiltElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((centerX - x) / centerX) * 10;
      
      gsap.to(element, {
        rotationX: rotateX,
        rotationY: rotateY,
        scale: 1.02,
        duration: 0.4,
        ease: 'power2.out'
      });
    });
    
    element.addEventListener('mouseleave', () => {
      gsap.to(element, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      });
    });
  });
  
  // Loading Animation
  window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.classList.add('page-loader');
    loader.innerHTML = '<div class="loader-content"><div class="loader-spinner"></div><span>Loading Portfolio...</span></div>';
    document.body.appendChild(loader);
    
    gsap.to(loader, {
      opacity: 0,
      duration: 0.8,
      delay: 1.5,
      ease: 'power3.out',
      onComplete: () => {
        loader.remove();
      }
    });
  });
  
  // Animated logo on nav
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('mouseenter', () => {
      gsap.to(logo, {
        scale: 1.2,
        rotation: 5,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)'
      });
    });
    
    logo.addEventListener('mouseleave', () => {
      gsap.to(logo, {
        scale: 1,
        rotation: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)'
      });
    });
  }
});

// Handle visibility change to pause animations when tab is hidden
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    gsap.globalTimeline.pause();
  } else {
    gsap.globalTimeline.resume();
  }
});

// Add CSS for cursor follower and loader
const style = document.createElement('style');
style.textContent = `
  .cursor-follower {
    position: fixed;
    width: 12px;
    height: 12px;
    background: rgba(0, 243, 255, 0.7);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    mix-blend-mode: difference;
    transition: opacity 0.3s ease;
  }
  
  .cursor-follower.active {
    width: 24px;
    height: 24px;
    background: rgba(0, 243, 255, 0.3);
    box-shadow: 0 0 0 2px rgba(0, 243, 255, 0.5);
  }
  
  .page-loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #111;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: 1;
  }
  
  .loader-content {
    text-align: center;
    color: white;
  }
  
  .loader-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid #00f3ff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 16px;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  /* Enhance 3D elements */
  .profile-3d, .portfolio-3d, .image-3d {
    transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
    transform-style: preserve-3d;
  }
  
  /* Animated gradients for buttons */
  .btn-primary {
    position: relative;
    overflow: hidden;
  }
  
  .btn-primary::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(0, 243, 255, 0.2),
      transparent
    );
    transform: rotate(45deg);
    transition: all 0.6s ease;
  }
  
  .btn-primary:hover::after {
    left: 100%;
    top: 100%;
  }
`;
document.head.appendChild(style);

// Add active class to cursor on links and buttons
document.querySelectorAll('a, button, .filter-btn, .portfolio-item, .client-logo').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('active');
  });
  
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
  });
});

// Parallax effect for background sections
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  
  // Parallax for home section
  const homeSection = document.querySelector('#home');
  if (homeSection) {
    homeSection.style.backgroundPositionY = `${scrolled * 0.4}px`;
  }
  
  // Subtle parallax for particles
  const particlesContainer = document.querySelector('#particles-js');
  if (particlesContainer) {
    particlesContainer.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
});

// Responsive adjustments
window.addEventListener('resize', () => {
  // Update Lenis on resize
  lenis.resize();
  
  // Scroll Progress Bar
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    const progressBar = document.querySelector(".scroll-progress");
    if (progressBar) progressBar.style.width = scrollPercent + "%";
  });
});
