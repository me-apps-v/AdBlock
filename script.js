const sliderThumb = document.querySelector(".slider-thumb-label");
const sliderTrack = document.querySelector(".slider-wrapper");
let isDragging = false;

// Начало перетаскивания мышью
sliderThumb.addEventListener("mousedown", function (e) {
    isDragging = true;
    document.body.style.cursor = "grabbing";
});

// Начало перетаскивания на сенсорных устройствах
sliderThumb.addEventListener("touchstart", function (e) {
    isDragging = true;
    document.body.style.cursor = "grabbing";
});

// Перемещение ползунка мышью
document.addEventListener("mousemove", function (e) {
    if (!isDragging) return;
    moveSlider(e.clientX);
});

// Перемещение ползунка на сенсорных устройствах
document.addEventListener("touchmove", function (e) {
    if (!isDragging) return;
    moveSlider(e.touches[0].clientX);
});

// Функция для перемещения ползунка
function moveSlider(clientX) {
    const trackRect = sliderTrack.getBoundingClientRect();
    let newLeft = clientX - trackRect.left - sliderThumb.offsetWidth / 2;

    // Ограничение движения ползунка
    if (newLeft < 0) {
        newLeft = 0;
    } else if (newLeft > trackRect.width - sliderThumb.offsetWidth) {
        newLeft = trackRect.width - sliderThumb.offsetWidth;
    }

    sliderThumb.style.left = newLeft + "px";

    // Если ползунок достигает конца, перенаправляем на страницу
    if (newLeft >= trackRect.width - sliderThumb.offsetWidth) {
        window.location.href = "https://apps.apple.com/us/app/ad-blocker-browser-protect/id1585053145";
    }
}

// Окончание перетаскивания мышью
document.addEventListener("mouseup", function () {
    isDragging = false;
    document.body.style.cursor = "default";
});

// Окончание перетаскивания на сенсорных устройствах
document.addEventListener("touchend", function () {
    isDragging = false;
    document.body.style.cursor = "default";
});
