
// Получаем элементы для управления звуком
const soundButton = document.getElementById('sound-btn');
const waterSound = document.getElementById('water-sound');

// Текущее состояние звука
let soundPlaying = false;

// Обработчик нажатия на кнопку
soundButton.addEventListener('click', () => {
    if (soundPlaying) {
        waterSound.pause();
        soundButton.textContent = 'Включить звук';
    } else {
        waterSound.play();
        soundButton.textContent = 'Выключить звук';
    }
    soundPlaying = !soundPlaying;
});

// Кнопка "Оформить заказ"
const orderButton = document.getElementById('order-btn');
orderButton.addEventListener('click', () => {
    alert('Спасибо за интерес к нашей воде! Напишите нам на email@example.com для заказа.');
});
