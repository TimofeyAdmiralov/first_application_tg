// инициализируем переменную tg, как главный элемент.
const tg = window.Telegram.WebApp;

// расширяем окно
tg.expand();

let p = document.createElement('b');
let usercard = document.getElementById('usercard');

// Используем шаблонную строку для вставки значений
p.innerText = ```
Добро пожаловать, 
${tg.initDataUnsafe?.user?.first_name || ''} 
${tg.initDataUnsafe?.user?.last_name || ''}```;

usercard.appendChild(p);
