// script.js
document.addEventListener('DOMContentLoaded', () => {
  // === 1. Обработка кнопок доната ===
  const donateButtons = document.querySelectorAll('.btn-donate');
  donateButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const plan = this.getAttribute('data-plan') || 'пакет';
      
      // Неон-вспышка
      this.style.transform = 'scale(0.92)';
      this.style.boxShadow = '0 0 100px #d400ff, 0 0 200px #b000ff';
      setTimeout(() => {
        this.style.transform = '';
        this.style.boxShadow = '';
      }, 350);

      // Уведомление
      showNeonNotification(`💜 Вы выбрали пакет "${plan}"! Спасибо за донат!`);
    });
  });

  // === 2. Ссылка GitHub ===
  const gitLink = document.getElementById('githubDonate');
  if (gitLink) {
    gitLink.addEventListener('click', (e) => {
      e.preventDefault();
      gitLink.style.textShadow = '0 0 40px #d400ff, 0 0 80px #a000e0';
      setTimeout(() => {
        gitLink.style.textShadow = '';
      }, 400);

      alert('✨ Репозиторий NeonDonate\nhttps://github.com/your-username/neon-donate\n(замените ссылку на свою)');
      // window.open('https://github.com/your-username/neon-donate', '_blank');
    });
  }

  // === 3. Неоновые точки (декор) ===
  function createNeonStars() {
    const wrapper = document.querySelector('.neon-wrapper');
    if (!wrapper || document.querySelector('.neon-star')) return;

    for (let i = 0; i < 20; i++) {
      const star = document.createElement('span');
      star.className = 'neon-star';
      star.style.position = 'absolute';
      star.style.width = (4 + Math.random() * 8) + 'px';
      star.style.height = star.style.width;
      star.style.background = '#c080ff';
      star.style.borderRadius = '50%';
      star.style.boxShadow = '0 0 20px #b000ff, 0 0 50px #7a00b3';
      star.style.pointerEvents = 'none';
      star.style.opacity = (0.2 + Math.random() * 0.5).toFixed(2);
      star.style.left = Math.random() * 96 + 2 + '%';
      star.style.top = Math.random() * 96 + 2 + '%';
      star.style.animation = `twinkleStar ${3 + Math.random() * 5}s infinite alternate`;
      star.style.zIndex = '0';
      wrapper.style.position = 'relative';
      wrapper.appendChild(star);
    }
  }

  // Добавляем стили для звёзд, если ещё нет
  if (!document.getElementById('star-style')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'star-style';
    styleSheet.textContent = `
      @keyframes twinkleStar {
        0% { opacity: 0.1; transform: scale(0.6); }
        100% { opacity: 0.9; transform: scale(1.6); }
      }
    `;
    document.head.appendChild(styleSheet);
  }

  setTimeout(createNeonStars, 500);

  // === 4. Уведомление ===
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
    notif.style.padding = '18px 36px';
    notif.style.borderRadius = '40px 10px 40px 10px';
    notif.style.fontFamily = "'Orbitron', sans-serif";
    notif.style.fontSize = '1.1rem';
    notif.style.letterSpacing = '2px';
    notif.style.zIndex = '9999';
    notif.style.textShadow = '0 0 20px #b000ff';
    notif.style.transition = 'opacity 0.5s ease';
    notif.style.maxWidth = '90%';
    notif.style.textAlign = 'center';
    document.body.appendChild(notif);

    setTimeout(() => {
      notif.style.opacity = '0';
      setTimeout(() => notif.remove(), 600);
    }, 3500);
  }

  // === 5. Эффект при наведении на видео ===
  const videoContainers = document.querySelectorAll('.video-container');
  videoContainers.forEach(container => {
    container.addEventListener('mouseenter', () => {
      container.style.boxShadow = '0 0 80px #d400ff, 0 0 150px #8a00c0';
    });
    container.addEventListener('mouseleave', () => {
      container.style.boxShadow = '';
    });
  });

  console.log('💜 NeonDonate — фиолетовый донат-сайт загружен!');
});