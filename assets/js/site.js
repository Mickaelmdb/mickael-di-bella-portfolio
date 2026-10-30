(() => {
  'use strict';
  const languageKey = 'mdb-portfolio-language';
  const toggle = document.getElementById('langToggle');
  const menu = document.getElementById('menuButton');
  const nav = document.getElementById('siteNav');
  const dialog = document.getElementById('lightbox');
  const image = document.getElementById('lightboxImage');
  const caption = document.getElementById('lightboxCaption');
  const year = document.getElementById('year');
  const progress = document.getElementById('readingProgress');
  let language = 'fr';
  try { if (localStorage.getItem(languageKey) === 'en') language = 'en'; } catch (e) { /* storage may be unavailable */ }
  function applyLanguage(next) {
    language = next;
    document.documentElement.lang = language;
    document.querySelectorAll('[data-fr][data-en]').forEach(el => {
      const value = el.getAttribute('data-' + language);
      if (value !== null) el.innerHTML = value;
    });
    document.querySelectorAll('[data-fr-href][data-en-href]').forEach(el => el.setAttribute('href', el.getAttribute('data-' + language + '-href')));
    if (toggle) { toggle.innerHTML = (language === 'fr' ? 'EN' : 'FR') + ' <span aria-hidden="true">↗</span>'; toggle.setAttribute('aria-label', language === 'fr' ? 'Switch to English' : 'Passer en français'); }
    if (menu) menu.setAttribute('aria-label', language === 'fr' ? 'Ouvrir le menu' : 'Open menu');
    try { localStorage.setItem(languageKey, language); } catch (e) { /* storage may be unavailable */ }
  }
  if (toggle) toggle.addEventListener('click', () => applyLanguage(language === 'fr' ? 'en' : 'fr'));
  if (menu && nav) {
    menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); } });
  }
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    const chosen = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b => { const active = b === button; b.classList.toggle('active', active); b.setAttribute('aria-pressed', String(active)); });
    document.querySelectorAll('[data-category]').forEach(card => card.classList.toggle('is-hidden', chosen !== 'all' && !card.dataset.category.split(' ').includes(chosen)));
  }));
  document.querySelectorAll('[data-lightbox]').forEach(button => button.addEventListener('click', () => {
    if (!dialog || !image || !caption) return;
    image.src = button.dataset.lightbox;
    image.alt = button.querySelector('img')?.alt || '';
    caption.textContent = button.getAttribute('data-caption-' + language) || '';
    if (typeof dialog.showModal === 'function') dialog.showModal();
  }));
  if (dialog) dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  const copy = document.getElementById('copyEmail');
  if (copy) copy.addEventListener('click', async () => {
    const address = 'mickael-dibella@hotmail.fr';
    const feedback = document.getElementById('copyFeedback');
    try { await navigator.clipboard.writeText(address); if (feedback) feedback.textContent = language === 'fr' ? 'Adresse copiée !' : 'Email copied!'; }
    catch (e) { if (feedback) feedback.textContent = address; }
  });
  if (year) year.textContent = new Date().getFullYear();
  function updateProgress() { if (!progress) return; const max = document.documentElement.scrollHeight - window.innerHeight; progress.style.width = (max > 0 ? Math.min(100, window.scrollY / max * 100) : 0) + '%'; }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress(); applyLanguage(language);
})();
