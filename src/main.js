import './style.css'
import { injectFooter } from './footer.js'
import { setupVideoModals } from './video-modal.js'
import { setupThemeToggle } from './theme-toggle.js'

// ── Navbar Scroll Effect ──
const setupNavScroll = () => {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  const handleScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.add('shadow-card', 'border-transparent');
      nav.classList.remove('border-slate-100/50');
    } else {
      nav.classList.remove('shadow-card', 'border-transparent');
      nav.classList.add('border-slate-100/50');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
};

// ── Mobile Menu Toggle ──
const setupMobileMenu = () => {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  
  if (!btn || !menu) return;

  menu.classList.add('mobile-menu-hidden', 'transition-all', 'duration-300');

  const closeMenu = () => {
    menu.classList.remove('mobile-menu-visible');
    menu.classList.add('mobile-menu-hidden');
    btn.setAttribute('aria-expanded', 'false');
  };

  btn.addEventListener('click', () => {
    const isVisible = menu.classList.contains('mobile-menu-visible');
    if (isVisible) {
      closeMenu();
    } else {
      menu.classList.remove('mobile-menu-hidden');
      menu.classList.add('mobile-menu-visible');
      btn.setAttribute('aria-expanded', 'true');
    }
  });

  // Automatically close the menu when a link inside is clicked
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close the menu when the theme is changed
  window.addEventListener('themeChanged', closeMenu);
};


// ── Scroll Animations (Fade-in with stagger) ──
const setupScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-8');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll('section > div, .animate-on-scroll');
  animateElements.forEach((el, i) => {
    el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-8');
    el.style.transitionDelay = `${Math.min(i * 80, 400)}ms`;
    observer.observe(el);
  });

  const cards = document.querySelectorAll('.premium-card, .glass-card');
  cards.forEach((card, i) => {
    if (!card.classList.contains('opacity-0')) {
      card.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-8');
      card.style.transitionDelay = `${Math.min(i * 100, 500)}ms`;
      observer.observe(card);
    }
  });
};

// ── Counter Animation ──
const setupCounterAnimation = () => {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent.trim();
        const match = text.match(/(\d+)/);
        
        if (match) {
          const target = parseInt(match[1]);
          const suffix = text.replace(match[1], '');
          let current = 0;
          const duration = 2000;
          const step = target / (duration / 16);

          const animate = () => {
            current += step;
            if (current >= target) {
              current = target;
              el.textContent = target >= 1000 
                ? (target / 1000).toFixed(0) + 'k' + suffix.replace('k', '')
                : target + suffix;
            } else {
              el.textContent = Math.floor(current) + suffix;
              requestAnimationFrame(animate);
            }
          };

          el.textContent = '0' + suffix;
          requestAnimationFrame(animate);
        }
        
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => counterObserver.observe(el));
};

// ── Form Handling ──
const setupContactForm = () => {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const originalHTML = btn.innerHTML;
    
    btn.innerHTML = `
      <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span class="ml-2">Sending...</span>
    `;
    btn.disabled = true;
    btn.classList.add('opacity-80');

    setTimeout(() => {
      btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span class="ml-2">Sent Successfully!</span>
      `;
      btn.classList.remove('opacity-80');
      btn.classList.add('from-green-600', 'to-green-700', 'bg-green-600');
      
      form.reset();
      
      setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.disabled = false;
        btn.classList.remove('from-green-600', 'to-green-700', 'bg-green-600');
      }, 3000);
    }, 1500);
  });
};

// ── Smooth anchor scroll ──
const setupSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
};

// ── Initialize ──
document.addEventListener('DOMContentLoaded', () => {
  injectFooter();
  setupNavScroll();
  setupMobileMenu();
  setupScrollAnimations();
  setupCounterAnimation();
  setupContactForm();
  setupVideoModals();
  setupSmoothScroll();
  setupThemeToggle();
});
