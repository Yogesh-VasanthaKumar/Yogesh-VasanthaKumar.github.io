const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
    const now = new Date();
    let h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const ampm = h >= 12 ? "PM" : "AM";

    h = h % 12;
    h = h ? h : 12; 

    hourEl.innerText = h < 10 ? "0" + h : h;
    minuteEl.innerText = m < 10 ? "0" + m : m;
    secondEl.innerText = s < 10 ? "0" + s : s;
    ampmEl.innerText = ampm;

    setTimeout(updateClock, 1000);
}

updateClock();
