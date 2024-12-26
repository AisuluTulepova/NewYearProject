// Устанавливаем дату Нового года
const newYear = new Date('January 1, 2025 00:00:00').getTime();

// Обновляем обратный отсчёт каждую секунду
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = newYear - now;

    // Вычисляем дни, часы, минуты и секунды
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Выводим результаты на страницу
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // Если отсчёт завершён, выводим сообщение
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById('timer').innerHTML = "С Новым годом!";
    }
}, 1000);