import { startTimer, restartTimer, stopTimer } from './timer.js'
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const restartBtn = document.getElementById("restartBtn");

startBtn.addEventListener("click", () => {
    startTimer();
})

stopBtn.addEventListener("click", () => {
    stopTimer();
})

restartBtn.addEventListener("click", () => {
    restartTimer();
})
