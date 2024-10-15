const sliderThumb = document.querySelector(".slider-thumb-label");
const sliderTrack = document.querySelector(".slider-wrapper");
let isDragging = false;

sliderThumb.addEventListener("mousedown", function (e) {
    isDragging = true;
});

document.addEventListener("mousemove", function (e) {
    if (!isDragging) return;

    const trackRect = sliderTrack.getBoundingClientRect();
    let newLeft = e.clientX - trackRect.left - sliderThumb.offsetWidth / 2;

    if (newLeft < 0) {
        newLeft = 0;
    } else if (newLeft > trackRect.width - sliderThumb.offsetWidth) {
        newLeft = trackRect.width - sliderThumb.offsetWidth;
    }

    sliderThumb.style.left = newLeft + "px";

    // If slider reaches the end, trigger the action
    if (newLeft >= trackRect.width - sliderThumb.offsetWidth) {
        window.location.href = "https://apps.apple.com/us/app/ad-blocker-browser-protect/id1585053145";
    }
});

document.addEventListener("mouseup", function () {
    isDragging = false;
});

document.querySelector(".cancel-button").addEventListener("click", function () {
    window.location.href = "https://apps.apple.com/us/app/ad-blocker-browser-protect/id1585053145";
});
