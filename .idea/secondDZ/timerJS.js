const endDate = new Date("2025-12-31T23:59:59").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const diff = endDate - now;

    const timer = document.getElementById("sale-timer-text");
    if (!timer) return;

    if (diff <= 0) {
        timer.innerHTML = "РАСПРОДАЖА ЗАКОНЧИЛАСЬ!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    timer.innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
}

setInterval(updateTimer, 1000);
updateTimer();
