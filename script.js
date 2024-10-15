const slider = document.getElementById("adblock-slider");
const thumbLabel = document.querySelector(".slider-thumb-label");

slider.addEventListener("input", function() {
    thumbLabel.style.left = `${slider.value * 2.5}px`; // Модифицируем положение
    if (slider.value == 100) {
        window.location.href = "https://apps.apple.com/us/app/ad-blocker-browser-protect/id1585053145";
    }
});

document.querySelector(".cancel-button").addEventListener("click", function() {
    window.location.href = "https://apps.apple.com/us/app/ad-blocker-browser-protect/id1585053145";
});
