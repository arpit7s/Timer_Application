

let timer = document.querySelector(".timer");

let timeInterval;
let seconds = 0;

function updatetimer() {
    let mints = Math.floor(seconds / 60);
    let secs = seconds % 60;
    timer.textContent = `${String(mints).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}


document.querySelector(".start").addEventListener("click", () => {
    if (!timeInterval) {
        timeInterval = setInterval(() => {
            seconds++;
            updatetimer();

        },1000);
    }
});

document.querySelector(".stop").addEventListener("click", () => {
    clearInterval(timeInterval);
    timeInterval = null
})

document.querySelector(".reset").addEventListener("click", () => {
    clearInterval(timeInterval);
    timeInterval = null;
    seconds = 0;
    updatetimer();
});


