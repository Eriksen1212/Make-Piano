const keys = document.querySelectorAll(".key");

keys.forEach(key => {
    key.addEventListener("click", () => {
        const note = key.dataset.note;
        const audio = new Audio(`sounds/${note}.wav`);
        audio.play();
    });
});
