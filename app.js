// инициализируем переменную tg, как главный элемент.
const tg = window.Telegram.WebApp;

// расширяем окно
tg.expand();

// Прописываем логику в DOM Элементе
document.addEventListener('DOMContentLoaded',function () {
    const usercard = document.getElementById('usercard');

    if(usercard) {
        let b = document.createElement('b');

        b.innerHTML = ```
        Добро пожаловать,${tg.initDateUnsafe.first_name}```
    } else {
        b.innerHTML = `Произошла ошибка при загрузке страницы!`
    }
})