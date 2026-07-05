// script.js
document.addEventListener('DOMContentLoaded', () => {
  // === 1. Фильтрация новостей по категориям ===
  const categoryButtons = document.querySelectorAll('.cat-btn');
  const newsCards = document.querySelectorAll('.news-card');

  categoryButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      // Активная кнопка
      categoryButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const category = this.getAttribute('data-category');

      newsCards.forEach(card => {
        if (category === 'all') {
          card.classList.remove('hidden');
        } else {
          const cardCategory = card.getAttribute('data-category');
          if (cardCategory === category) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        }
      });

      // Неон-эффект при переключении
      this.style.transform = 'scale(0.92)';
      setTimeout(() => {
        this.style.transform = '';
      }, 200);
    });
  });

  // === 2. Ссылка GitHub ===
  const gitLink = document.getElementById('githubNews');
  if (gitLink) {
    gitLink.addEventListener('click', (e) => {
      e.preventDefault();
      gitLink.style.textShadow = '0 0 40px #d400ff, 0 0 80px #a000e0';
      setTimeout(() => {
        gitLink.style.textShadow = '';
      }, 400);

      alert('✨ Репозиторий NeonNews\nhttps://github.com/your-username/neon-news\n(замените ссылку на свою)');
      // window.open('https://github.com/your-username/neon-news', '_blank');
    });
  }

  // === 3. Неоновые точки (декор) ===
  function createNeonStars() {
    const wrapper = document.querySelector('.neon-news-wrapper');
    if (!wrapper || document.querySelector('.neon-star')) return;

    for (let i = 0; i < 18; i++) {
      const star = document.createElement('span');
      star.className = 'neon-star';
      star.style.position = 'absolute';
      star.style.width = (3 + Math.random() * 7) + 'px';
      star.style.height = star.style.width;
      star.style.background = '#c080ff';
      star.style.borderRadius = '50%';
      star.style.boxShadow = '0 0 20px #b000ff, 0 0 50px #7a00b3';
      star.style.pointerEvents = 'none';
      star.style.opacity = (0.15 + Math.random() * 0.5).toFixed(2);
      star.style.left = Math.random() * 96 + 2 + '%';
      star.style.top = Math.random() * 96 + 2 + '%';
      star.style.animation = `twinkleStar ${3 + Math.random() * 5}s infinite alternate`;
      star.style.zIndex = '0';
      wrapper.style.position = 'relative';
      wrapper.appendChild(star);
    }
  }

  if (!document.getElementById('star-style')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'star-style';
    styleSheet.textContent = `
      @keyframes twinkleStar {
        0% { opacity: 0.1; transform: scale(0.6); }
        100% { opacity: 0.8; transform: scale(1.5); }
      }
    `;
    document.head.appendChild(styleSheet);
  }

  setTimeout(createNeonStars, 500);

  // === 4. Уведомление при клике на новость ===
  newsCards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Не кликаем по видео/ссылкам внутри
      if (e.target.closest('video') || e.target.closest('iframe') || e.target.closest('a')) return;

      const title = this.querySelector('h2')?.textContent || 'Новость';
      const badge = this.querySelector('.news-badge')?.textContent || '';

      showNeonNotification(`📰 ${badge}: ${title.substring(0, 40)}...`);
    });
  });

  function showNeonNotification(text) {
    const existing = document.querySelector('.neon-notification');
    if (existing) existing.remove();

    const notif = document.createElement('div');
    notif.className = 'neon-notification';
    notif.textContent = text;
    notif.style.position = 'fixed';
    notif.style.bottom = '30px';
    notif.style.left = '50%';
    notif.style.transform = 'translateX(-50%)';
    notif.style.background = 'rgba(20, 0, 40, 0.92)';
    notif.style.backdropFilter = 'blur(12px)';
    notif.style.border = '2px solid #b000ff';
    notif.style.boxShadow = '0 0 70px #a000e0, 0 0 120px #7a00b3';
    notif.style.color = '#f0d0ff';
    notif.style.padding = '16px 32px';
    notif.style.borderRadius = '40px 10px 40px 10px';
    notif.style.fontFamily = "'Orbitron', sans-serif";
    notif.style.fontSize = '1rem';
    notif.style.letterSpacing = '1px';
    notif.style.zIndex = '9999';
    notif.style.textShadow = '0 0 20px #b000ff';
    notif.style.transition = 'opacity 0.5s ease';
    notif.style.maxWidth = '90%';
    notif.style.textAlign = 'center';
    document.body.appendChild(notif);

    setTimeout(() => {
      notif.style.opacity = '0';
      setTimeout(() => notif.remove(), 600);
    }, 3000);
  }

  // === 5. Счётчик просмотров (демо) ===
  console.log('📰 NeonNews — неоновый новостной портал загружен!');
});