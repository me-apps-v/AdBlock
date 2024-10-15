const slider = document.getElementById("adblock-slider");

slider.addEventListener("input", function() {
    if (slider.value == 100) {
        window.location.href = "https://apps.apple.com/us/app/ad-blocker-browser-protect/id1585053145";
    }
});
