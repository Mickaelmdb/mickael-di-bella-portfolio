(() => {
  const toggle = document.getElementById('languageToggle');
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.querySelector('.main-nav');
  let language = 'fr';

  function setLanguage(next) {
    language = next;
    document.documentElement.lang = language;
    document.querySelectorAll('[data-fr][data-en]').forEach((el) => {
      const value = el.getAttribute(`data-${language}`);
      if (value !== null) el.innerHTML = value;
    });
    toggle.textContent = language === 'fr' ? 'EN' : 'FR';
    const caseLinks = {
      'projects/homeindex-data-quality.html': 'projects/homeindex-data-quality-en.html',
      'projects/automated-monitoring.html': 'projects/automated-monitoring-en.html',
      'projects/piaf.html': 'projects/piaf-en.html',
      'projects/run-tracker.html': 'projects/run-tracker-en.html'
    };
    document.querySelectorAll('.project-info a.text-link').forEach((link) => {
      const current = link.getAttribute('href');
      const base = Object.keys(caseLinks).find((fr) => current === fr || current === caseLinks[fr]);
      if (base) link.setAttribute('href', language === 'fr' ? base : caseLinks[base]);
    });
    toggle.setAttribute('aria-label', language === 'fr' ? 'Switch to English' : 'Passer en français');
    document.title = language === 'fr'
      ? 'Mickael Di Bella — IT Operations Portfolio'
      : 'Mickael Di Bella — IT Operations Portfolio';
  }

  toggle.addEventListener('click', () => setLanguage(language === 'fr' ? 'en' : 'fr'));
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
  document.getElementById('year').textContent = new Date().getFullYear();
})();