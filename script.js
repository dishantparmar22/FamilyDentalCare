// Navbar toggle for mobile
const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');
const header = document.querySelector('.site-header');

if (toggle && menu){
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Sticky shadow on scroll
const onScroll = () => {
  if(window.scrollY > 4){ header && header.classList.add('is-stuck'); }
  else { header && header.classList.remove('is-stuck'); }
};
window.addEventListener('scroll', onScroll);
onScroll();

// Footer year + time
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

const t = document.getElementById('time');
if (t){
  const tick = () => { t.textContent = new Date().toLocaleString(); };
  tick(); setInterval(tick, 1000);
}

// Simple client-side handlers
function handleForm(id, successMsg){
  const form = document.getElementById(id);
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // You can replace this with a real backend request (fetch).
    alert(successMsg + '\n\nWe will contact you shortly.');
    form.reset();
  });
}

// handled by PHP backend now
// handled by PHP backend now



// === Theme toggle ===
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('fdc-theme');
  if (saved) root.setAttribute('data-theme', saved);
  const btn = document.querySelector('.theme-toggle');
  if (btn){
    const icon = btn.querySelector('i');
    const updateIcon = () => {
      if (root.getAttribute('data-theme') === 'dark'){
        icon.className = "bi bi-sun";
      } else {
        icon.className = "bi bi-moon";
      }
    };
    updateIcon();
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', current);
      localStorage.setItem('fdc-theme', current);
      updateIcon();
    });
  }
})();