const sliderThumb = document.querySelector(".slider-thumb-label");
const sliderTrack = document.querySelector(".slider-wrapper");
let isDragging = false;

// Начало перетаскивания
sliderThumb.addEventListener("mousedown", function (e) {
    isDragging = true;
    document.body.style.cursor = "grabbing";
});

// Перемещение ползунка
document.addEventListener("mousemove", function (e) {
    if (!isDragging) return;

    const trackRect = sliderTrack.getBoundingClientRect();
    let newLeft = e.clientX - trackRect.left - sliderThumb.offsetWidth / 2;

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
});

// Окончание перетаскивания
document.addEventListener("mouseup", function () {
    isDragging = false;
    document.body.style.cursor = "default";
});
