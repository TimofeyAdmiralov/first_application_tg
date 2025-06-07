// инициализируем переменную tg, как главный элемент.
const tg = window.Telegram.WebApp;

// расширяем окно
tg.expand();

// Дождитесь полной загрузки DOM, если ваш скрипт в head
document.addEventListener('DOMContentLoaded', () => {
  const usercard = document.getElementById('usercard');

  if (usercard) {
    // Создаем элемент <b>
    const p = document.createElement('b');

    // Используем шаблонную строку с правильными бэктиками
    p.innerText = `Добро пожаловать, 
${tg.initDataUnsafe?.user?.first_name || ''} 
${tg.initDataUnsafe?.user?.last_name || ''}`;

    // Добавляем элемент в usercard
    usercard.appendChild(p);
  } else {
    console.error('Element with id "usercard" not found.');
  }
});