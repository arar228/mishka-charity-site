/* $MISHKA — мелкая интерактивность */

// 1) Копирование адреса контракта
const CA = 'EQBuwtx2m-F6_niT6r5UD4xjD0j6__nOohNKlb3U-gKybuZb';
const copyBtn = document.getElementById('copyBtn');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(CA);
    } catch {
      // Fallback для старых браузеров
      const ta = document.createElement('textarea');
      ta.value = CA;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch {}
      document.body.removeChild(ta);
    }
    copyBtn.classList.add('is-copied');
    setTimeout(() => copyBtn.classList.remove('is-copied'), 1800);
  });
}

// 2) Reveal on scroll — добавляем класс .in блокам в зоне видимости
const revealTargets = document.querySelectorAll(
  '.section-head, .step, .card, .ca-card, .dex, .community-card, .hero-copy, .hero-art, .vcard, .transparency-grid > *'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const io = ('IntersectionObserver' in window) ? new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  }
}, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }) : null;

if (io) {
  revealTargets.forEach(el => io.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('in'));
}

// 3) Лёгкий параллакс декоративных «лап» и косточек на фоне
const decor = document.querySelectorAll('.bg-decor svg');
let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;
    decor.forEach((el, i) => {
      const speed = (i % 3 + 1) * 0.04;
      el.style.transform = `${getComputedStyle(el).transform === 'none' ? '' : ''}translate3d(0, ${(-y * speed).toFixed(1)}px, 0)`;
      // Сохраняем исходный rotate из инлайн-стиля, добавляя translate
      const baseRot = el.dataset.rot;
      if (baseRot) {
        el.style.transform = `translate3d(0, ${(-y * speed).toFixed(1)}px, 0) rotate(${baseRot})`;
      }
    });
    ticking = false;
  });
}
// Снимем исходный rotate, чтобы параллакс не ломал поворот
decor.forEach(el => {
  const t = el.style.transform || '';
  const match = t.match(/rotate\(([^)]+)\)/);
  if (match) el.dataset.rot = match[1];
});
window.addEventListener('scroll', onScroll, { passive: true });

// 4) Lightbox — клик по карточке открывает видео со звуком
const lightbox = document.getElementById('lightbox');
const lbVideo = document.getElementById('lbVideo');
const lbCaption = document.getElementById('lbCaption');
const lbClose = document.querySelector('.lb-close');

function openLightbox(src, caption){
  if (!lightbox || !lbVideo) return;
  lbVideo.src = src;
  lbCaption.textContent = caption || '';
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
  // мини-задержка чтобы dom применился, потом play
  requestAnimationFrame(() => {
    lbVideo.currentTime = 0;
    lbVideo.muted = false;
    const p = lbVideo.play();
    if (p && p.catch) p.catch(() => { /* iOS требует жеста — пользователь нажмёт play на controls */ });
  });
}
function closeLightbox(){
  if (!lightbox) return;
  lbVideo.pause();
  lbVideo.removeAttribute('src');
  lbVideo.load();
  lightbox.hidden = true;
  document.body.style.overflow = '';
}

document.querySelectorAll('.vcard').forEach(card => {
  card.addEventListener('click', () => {
    const src = card.dataset.src;
    const cap = card.dataset.caption;
    if (src) openLightbox(src, cap);
  });
});
if (lbClose) lbClose.addEventListener('click', closeLightbox);
if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox && !lightbox.hidden) closeLightbox();
});

// Если язык меняется при открытом lightbox — синхронизируем подпись
let currentLightboxSrc = null;
document.querySelectorAll('.vcard').forEach(card => {
  card.addEventListener('click', () => { currentLightboxSrc = card.dataset.src; });
});
document.addEventListener('langchange', () => {
  if (lightbox && !lightbox.hidden && currentLightboxSrc){
    const card = document.querySelector(`.vcard[data-src="${currentLightboxSrc}"]`);
    if (card && lbCaption) lbCaption.textContent = card.dataset.caption || '';
  }
});

// Видео-превью: автоплей только когда карточка в видимости, пауза вне её.
// На мобиле / Save-Data грузим видео лениво (preload меняется только когда близко к viewport).
const previewVideos = document.querySelectorAll('.vcard video');
const isCoarse = matchMedia('(hover: none), (pointer: coarse)').matches;
const saveData = (navigator.connection && navigator.connection.saveData) === true;
const lowPower = isCoarse || saveData;

if ('IntersectionObserver' in window) {
  // Преподгрузка metadata, когда карточка приближается к viewport (200px зазор)
  const preloader = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        const v = e.target;
        if (v.preload === 'none') v.preload = 'metadata';
        preloader.unobserve(v);
      }
    }
  }, { rootMargin: '200px 0px' });
  previewVideos.forEach(v => preloader.observe(v));

  // Реальный play/pause только когда видео >= 50% (на мобиле — 70%, чтобы экономить)
  const vio = new IntersectionObserver((entries) => {
    for (const e of entries) {
      const v = e.target;
      if (e.isIntersecting) {
        // На low-power устройствах не запускаем больше одного видео одновременно
        if (lowPower) {
          previewVideos.forEach(other => { if (other !== v) other.pause(); });
        }
        const p = v.play();
        if (p && p.catch) p.catch(() => { /* iOS может блокировать без жеста — это ОК, постер показан */ });
      } else {
        v.pause();
      }
    }
  }, { threshold: lowPower ? 0.7 : 0.4 });
  previewVideos.forEach(v => vio.observe(v));
}

// 5) Подсветка активного пункта меню
const sections = ['life','how','transparency','buy','tokenomics'].map(id => document.getElementById(id)).filter(Boolean);
const navLinks = document.querySelectorAll('.nav-links a');
function syncActive() {
  const y = window.scrollY + 120;
  let active = null;
  for (const sec of sections) {
    if (sec.offsetTop <= y) active = sec.id;
  }
  navLinks.forEach(a => {
    const isActive = a.getAttribute('href') === `#${active}`;
    a.style.color = isActive ? 'var(--brown)' : '';
  });
}
window.addEventListener('scroll', syncActive, { passive: true });
syncActive();
