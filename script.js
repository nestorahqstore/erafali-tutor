// ============================================================
// Eraf Ali — Tutor Site
// Vanilla JS: mobile nav toggle, testimonial tabs, footer year
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile navigation ---------- */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    // Close the mobile menu after a nav link is tapped
    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  /* ---------- Testimonial tabs (Written / Video / Audio) ---------- */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.testimonial-panel');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      tabButtons.forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      panels.forEach((panel) => {
        if (panel.id === targetId) {
          panel.hidden = false;
          panel.classList.add('is-active');
        } else {
          panel.hidden = true;
          panel.classList.remove('is-active');
        }
      });
    });
  });

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
