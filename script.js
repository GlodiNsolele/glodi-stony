// ====== Utilitaires & initialisation ======
document.addEventListener('DOMContentLoaded', function() {
  // année dans le footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // nav toggle (mobile)
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  navToggle && navToggle.addEventListener('click', function() {
    mainNav.classList.toggle('open');
    this.classList.toggle('open');
    // simple animation: afficher/masquer nav
    if (mainNav.style.display === 'block') mainNav.style.display = '';
    else mainNav.style.display = 'block';
  });
});

// ====== Header background on scroll ======
window.addEventListener("scroll", function() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  if (window.scrollY > 30) {
    header.style.background = "linear-gradient(90deg,#06102a,#0c274a)";
  } else {
    header.style.background = "";
  }
});

// ====== Lightbox ======
function openLightbox(imgElement) {
  if (!imgElement) return;
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');

  lightboxImg.src = imgElement.src;
  lightboxImg.alt = imgElement.alt || 'Projet';
  caption.textContent = imgElement.alt || '';
  lightbox.style.display = 'flex';
  lightbox.setAttribute('aria-hidden', 'false');

  // empêche le scroll de fond
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  // fermer si clic sur fond ou sur le bouton close
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  // si clic sur l'image ne ferme pas
  if (e && e.target && e.target.id === 'lightbox-img') return;

  lightbox.style.display = 'none';
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Fermer lightbox avec ESC
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});

// ====== Filtre Portfolio ======
function filterSelection(category, btn) {
  const items = document.querySelectorAll('.portfolio-item');
  const buttons = document.querySelectorAll('.filter-btn');

  // gérer active button (si btn fourni)
  if (buttons) buttons.forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
      item.setAttribute('aria-hidden', 'false');
    } else {
      item.style.display = 'none';
      item.setAttribute('aria-hidden', 'true');
    }
  });
}

// initialisation : afficher tout
// (attendre que le DOM soit prêt)
document.addEventListener('DOMContentLoaded', function() {
  filterSelection('all', document.querySelector('.filter-btn'));
});
