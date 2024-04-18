const timeInput = document.getElementById("timeInput");
const display = document.querySelector(".display");

let remainingTime = 0;
let start = true;
let timer;

function startTimer() {
    if (timer) {
        clearInterval(timer);
    }
    if (start) {
        remainingTime = remainingTime.value;
    } else {
        remainingTime;
    }
    remainingTime = remainingTime || timeInput.value;
    timer = setInterval(() => {
        updateTime();
    }, 1000);
}

function restartTimer() {
    remainingTime = 0;
    clearInterval(timer);
    startTimer();
}

function stopTimer() {
    clearInterval(timer);
    start = false;
}

function updateTime() {
    if (remainingTime > 0) {
        remainingTime--;
        displayTime();
    } else {
        clearInterval(timer);
    }
}

function displayTime() {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;
    display.innerHTML = `${hours.toString().padStart(2, "0")} hours :
    ${minutes.toString().padStart(2, "0")} minutes :
    ${seconds.toString().padStart(2, "0")} seconds remaining`
    console.log(`Hours:${hours}, Minutes:${minutes}, Seconds:${seconds}`)
}

export { startTimer, restartTimer, stopTimer };