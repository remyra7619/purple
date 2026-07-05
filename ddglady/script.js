// script.js
document.addEventListener('DOMContentLoaded', () => {
  // === 1. Кнопка "Играть сейчас" ===
  const actionBtn = document.getElementById('actionBtn');
  if (actionBtn) {
    actionBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Эффект неоновой вспышки
      actionBtn.style.transform = 'scale(0.92)';
      actionBtn.style.boxShadow = '0 0 100px #d400ff, 0 0 200px #b000ff';
      setTimeout(() => {
        actionBtn.style.transform = '';
        actionBtn.style.boxShadow = '';
      }, 300);

      // Всплывающее сообщение (имитация действия)
      const msg = document.createElement('div');
      msg.textContent = '🚀 Добро пожаловать на сервер! (неон-режим активирован)';
      msg.style.position = 'fixed';
      msg.style.bottom = '30px';
      msg.style.left = '50%';
      msg.style.transform = 'translateX(-50%)';
      msg.style.background = 'rgba(20, 0, 40, 0.9)';
      msg.style.backdropFilter = 'blur(8px)';
      msg.style.border = '2px solid #b000ff';
      msg.style.boxShadow = '0 0 60px #a000e0';
      msg.style.color = '#f0d0ff';
      msg.style.padding = '16px 32px';
      msg.style.borderRadius = '40px 10px 40px 10px';
      msg.style.fontFamily = "'Orbitron', sans-serif";
      msg.style.fontSize = '1.1rem';
      msg.style.letterSpacing = '2px';
      msg.style.zIndex = '999';
      msg.style.textShadow = '0 0 20px #b000ff';
      msg.style.transition = 'opacity 0.4s';
      document.body.appendChild(msg);

      setTimeout(() => {
        msg.style.opacity = '0';
        setTimeout(() => msg.remove(), 500);
      }, 3200);
    });
  }

  // === 2. Ссылка GitHub — красивое открытие в новом окне (или алерт) ===
  const githubLink = document.getElementById('githubLink');
  if (githubLink) {
    githubLink.addEventListener('click', (e) => {
      e.preventDefault();
      // Эффект неон-пульсации на ссылке
      githubLink.style.textShadow = '0 0 40px #d400ff, 0 0 80px #a000e0';
      setTimeout(() => {
        githubLink.style.textShadow = '';
      }, 400);

      // Открываем GitHub (заглушка — можно заменить на реальный URL)
      const repoUrl = 'https://github.com/your-username/your-repo'; // <-- замените на свой URL
      // Для демонстрации показываем уведомление, что репозиторий готов
      alert(`✨ Репозиторий готов!\nПерейдите по ссылке:\n${repoUrl}\n(замените URL на свой)`);
      // window.open(repoUrl, '_blank'); // раскомментируйте, когда укажете реальную ссылку
    });
  }

  // === 3. Дополнительная анимация: случайное мерцание звёзд (эффект) ===
  // Создаём маленькие неоновые точки на фоне (декоративно)
  function createNeonDots() {
    const card = document.querySelector('.neon-card');
    if (!card) return;
    // Добавляем только если точек ещё нет
    if (document.querySelector('.neon-dot')) return;

    for (let i = 0; i < 14; i++) {
      const dot = document.createElement('span');
      dot.className = 'neon-dot';
      dot.style.position = 'absolute';
      dot.style.width = '6px';
      dot.style.height = '6px';
      dot.style.background = '#c080ff';
      dot.style.borderRadius = '50%';
      dot.style.boxShadow = '0 0 18px #b000ff, 0 0 40px #7a00b3';
      dot.style.pointerEvents = 'none';
      dot.style.opacity = (Math.random() * 0.6 + 0.2).toFixed(2);
      dot.style.left = Math.random() * 95 + 2 + '%';
      dot.style.top = Math.random() * 95 + 2 + '%';
      dot.style.animation = `twinkle ${3 + Math.random() * 4}s infinite alternate`;
      dot.style.zIndex = '0';
      card.style.position = 'relative';
      card.appendChild(dot);
    }
  }

  // Добавляем ключевые кадры для мерцания (если ещё нет)
  if (!document.getElementById('neon-dot-style')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'neon-dot-style';
    styleSheet.textContent = `
      @keyframes twinkle {
        0% { opacity: 0.15; transform: scale(0.7); }
        100% { opacity: 0.9; transform: scale(1.4); }
      }
    `;
    document.head.appendChild(styleSheet);
  }

  // Запускаем создание точек через небольшую задержку (чтобы не мешатьновной анимации)
  setTimeout(createNeonDots, 600);

  // === 4. Эффект "дрожания" заголовка при наведении ===
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) {
    heroTitle.addEventListener('mouseenter', () => {
      heroTitle.style.animation = 'none';
      heroTitle.style.transform = 'scale(1.02)';
      heroTitle.style.textShadow = '0 0 40px #d400ff, 0 0 90px #b000ff, 0 0 140px #7a00b3';
    });
    heroTitle.addEventListener('mouseleave', () => {
      heroTitle.style.animation = 'flicker 2.5s infinite alternate';
      heroTitle.style.transform = '';
      heroTitle.style.textShadow = '';
    });
  }

  console.log('🔥 NeonCraft — фиолетовый неон загружен!');
});
