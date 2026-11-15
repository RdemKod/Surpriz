// Sayacın Başlangıç Tarihi (Yıl, Ay-1, Gün, Saat, Dakika)
// Not: Aylar 0'dan başlar (Ocak: 0, Şubat: 1, ... Temmuz: 6, Aralık: 11)
const startDate = new Date(2023, 5, 15, 12, 0, 0); 

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}

// Her saniye sayacı güncelle
setInterval(updateTimer, 1000);
updateTimer();

// Müzik Çalar Kontrolü
const musicToggle = document.getElementById("musicToggle");
const bgMusic = document.getElementById("bgMusic");

musicToggle.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.innerText = "⏸️ Müziği Durdur";
    } else {
        bgMusic.pause();
        musicToggle.innerText = "🎵 Müziği Başlat";
    }
});