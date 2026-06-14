// ===== PRELOADER =====
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('done');
  }, 1600);
});

// ===== TYPING EFFECT =====
const words = ['brands that stand out', 'packaging that sells', 'designs that inspire', 'visual stories'];
let wordIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.querySelector('.typed');

function typeEffect() {
  if (!typedEl) return;
  const current = words[wordIndex];
  typedEl.textContent = isDeleting ? current.slice(0, charIndex--) : current.slice(0, charIndex++);

  if (!isDeleting && charIndex > current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 2000);
  } else if (isDeleting && charIndex < 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 400);
  } else {
    setTimeout(typeEffect, isDeleting ? 40 : 80);
  }
}
typeEffect();

// ===== SMOOTH SCROLL NAV =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu if open
      document.querySelector('.nav-menu')?.classList.remove('open');
      document.querySelector('.nav-toggle')?.classList.remove('open');
    }
  });
});

// ===== ACTIVE NAV ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
function updateNav() {
  const scrollY = window.scrollY + 100;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
}
window.addEventListener('scroll', updateNav);

// ===== NAVBAR SCROLL BEHAVIOR =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');

  // Scroll progress
  const scrolled = window.scrollY;
  const docH = document.documentElement.scrollHeight - window.innerHeight;
  const pct = (scrolled / docH) * 100;
  const bar = document.querySelector('.scroll-progress');
  if (bar) bar.style.width = pct + '%';
});

// ===== MOBILE TOGGLE =====
const toggle = document.querySelector('.nav-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    document.querySelector('.nav-menu')?.classList.toggle('open');
  });
}

// ===== COUNTER ANIMATION =====
const statNums = document.querySelectorAll('.stat-num');
let counted = false;
function countUp() {
  if (counted) return;
  const trigger = document.querySelector('.hero-stats');
  if (!trigger) return;
  const rect = trigger.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.9) {
    counted = true;
    statNums.forEach(el => {
      const target = parseInt(el.dataset.count);
      let n = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        n += step;
        if (n >= target) { n = target; clearInterval(timer); }
        el.textContent = n + '+';
      }, 50);
    });
  }
}
window.addEventListener('scroll', countUp);

// ===== REVEAL ON SCROLL =====
const reveals = document.querySelectorAll('.about-grid, .timeline-item, .skill-card, .work-item, .contact-card, .section-header, .work-filters');
reveals.forEach(el => el.classList.add('reveal'));
window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.88) el.classList.add('visible');
  });
});
// Initial check
window.dispatchEvent(new Event('scroll'));

// ===== PORTFOLIO FILTER =====
const filterTabs = document.querySelectorAll('.filter-tab');
const workItems = document.querySelectorAll('.work-item');

filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;

    workItems.forEach((item, i) => {
      const cat = item.dataset.category;
      if (filter === 'all' || cat === filter) {
        item.classList.remove('hidden');
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
          item.style.transition = 'opacity .5s, transform .5s';
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, i * 60);
      } else {
        item.style.transition = 'opacity .3s, transform .3s';
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => item.classList.add('hidden'), 300);
      }
    });
  });
});

// ===== PROJECT MODAL =====
function openProject(btn) {
  const modal = btn.closest('.work-item').querySelector('.work-modal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
function closeProject(el) {
  const modal = el.closest('.work-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
  // If it's a link inside modal, follow it
  if (el.tagName === 'A') return;
}
// Close modal on backdrop click
document.addEventListener('click', e => {
  if (e.target.classList.contains('work-modal') && e.target.classList.contains('open')) {
    e.target.classList.remove('open');
    document.body.style.overflow = '';
  }
});
// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.work-modal.open').forEach(m => {
      m.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
});

// ===== CONTACT FORM =====
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('fname').value.trim();
    const email = document.getElementById('femail').value.trim();
    const message = document.getElementById('fmessage').value.trim();
    const msgEl = document.getElementById('form-msg');

    if (!name || !email || !message) {
      msgEl.className = 'error';
      msgEl.textContent = 'Please fill in all required fields.';
      return;
    }

    // Simulate send
    const btn = form.querySelector('button[type="submit"]');
    const origHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    setTimeout(() => {
      msgEl.className = 'success';
      msgEl.textContent = `Thanks ${name}! Your message has been sent. I'll get back to you soon.`;
      btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
      form.reset();
      setTimeout(() => {
        btn.innerHTML = origHTML;
        btn.disabled = false;
        msgEl.style.display = 'none';
        msgEl.className = '';
      }, 4000);
    }, 1500);
  });
}

// ===== SKILL BAR ANIMATION =====
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-pfill').forEach(bar => {
        bar.style.width = getComputedStyle(bar).getPropertyValue('--w');
      });
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-card').forEach(card => skillObserver.observe(card));