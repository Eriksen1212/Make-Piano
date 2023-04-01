const keys = document.querySelectorAll(".key");
const background = document.getElementById("background");
const changeBackgroundBtn = document.getElementById("change-background");

// Piano key click event listeners
keys.forEach(key => {
    key.addEventListener("click", () => {
        const note = key.dataset.note;
        const audio = new Audio(`sounds/${note}.wav`);
        audio.play();
    });
});

// Background changing functionality
const backgrounds = [
    "background1.jpg",
    "background2.jpg",
    "background3.jpg",
    "background4.jpg",
    "background5.jpg"
];

let currentBackground = 0;

changeBackgroundBtn.addEventListener("click", () => {
    currentBackground = (currentBackground + 1) % backgrounds.length;
    background.style.backgroundImage = `url('images/${backgrounds[currentBackground]}')`;
});
