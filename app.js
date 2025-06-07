// инициализируем переменную `tg`, как главный элемент.
const tg = window.Telegram.WebApp;

// расширяем окно
tg.expand();

let p = document.createElement('b');
let usercard = document.getElementById('usercard');

p.innerText = `Добро пожаловать,${tg.initDateUnsafe.first_name} ${tg.initDateUnsafe.last_name}`;


usercard.appendChild(p);