// script.js
document.addEventListener('DOMContentLoaded', () => {
  // === 1. Переключение между разделами ===
  const navButtons = document.querySelectorAll('.nav-btn');
  const sections = {
    rules: document.getElementById('section-rules'),
    howto: document.getElementById('section-howto')
  };

  navButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      // Активная кнопка
      navButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Показываем нужную секцию
      const section = this.getAttribute('data-section');
      Object.keys(sections).forEach(key => {
        if (key === section) {
          sections[key].classList.remove('hidden');
        } else {
          sections[key].classList.add('hidden');
        }
      });

      // Неон-эффект при переключении
      this.style.transform = 'scale(0.92)';
      setTimeout(() => {
        this.style.transform = '';
      }, 200);

      // Показываем уведомление
      const names = {
        rules: '📋 Правила сервера',
        howto: '🚀 Инструкция по входу'
      };
      showNeonNotification(`Переключено: ${names[section] || section}`);
    });
  });

  // === 2. Кнопка скачивания ресурспака ===
  const downloadBtn = document.querySelector('.btn-download');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      downloadBtn.style.transform = 'scale(0.92)';
      downloadBtn.style.boxShadow = '0 0 80px #d400ff, 0 0 150px #b000ff';
      setTimeout(() => {
        downloadBtn.style.transform = '';
        downloadBtn.style.boxShadow = '';
      }, 300);

      showNeonNotification('📥 Скачивание пака модов началось... (демо)');
    });
  }

  // === 3. Ссылка GitHub ===
  const gitLink = document.getElementById('githubServer');
  if (gitLink) {
    gitLink.addEventListener('click', (e) => {
      e.preventDefault();
      gitLink.style.textShadow = '0 0 40px #d400ff, 0 0 80px #a000e0';
      setTimeout(() => {
        gitLink.style.textShadow = '';
      }, 400);

      alert('✨ Репозиторий NeonServer\nhttps://github.com/your-username/neon-server\n(замените ссылку на свою)');
      // window.open('https://github.com/your-username/neon-server', '_blank');
    });
  }

  // === 4. Неоновые точки (декор) ===
  function createNeonStars() {
    const wrapper = document.querySelector('.neon-server-wrapper');
    if (!wrapper || document.querySelector('.neon-star')) return;

    for (let i = 0; i < 16; i++) {
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

  // === 5. Уведомления ===
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
    notif.style.padding = '14px 28px';
    notif.style.borderRadius = '40px 10px 40px 10px';
    notif.style.fontFamily = "'Orbitron', sans-serif";
    notif.style.fontSize = '0.95rem';
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
    }, 2800);
  }

  // === 6. Автоматическое уведомление при загрузке ===
  setTimeout(() => {
    showNeonNotification('💜 Добро пожаловать на NeonServer!');
  }, 800);

  console.log('🎮 NeonServer — правила и вход загружены!');
});