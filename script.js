// Configuración del objetivo: 8 de noviembre de 2025, 20:00 hora Buenos Aires
function getBuenosAiresTime() {
  // Convierte a zona horaria de Buenos Aires (GMT-3)
  const now = new Date();
  return new Date(now.toLocaleString("en-US", { timeZone: "America/Argentina/Buenos_Aires" }));
}

const targetTime = new Date("2025-11-08T20:00:00-03:00").getTime();
const countdown = document.getElementById("countdown");

const interval = setInterval(() => {
  const now = getBuenosAiresTime().getTime();
  const distance = targetTime - now;

  if (distance < 0) {
    clearInterval(interval);
    countdown.textContent = "¡El evento ha comenzado!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Mapa Leaflet (América 2251, Béccar)
const map = L.map('map').setView([-34.46414016083752, -58.542364462498206], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([-34.46414016083752, -58.542364462498206])
  .addTo(map)
  .bindPopup('América 2251, Béccar, Buenos Aires, Argentina')
  .openPopup();

// Efecto de partículas doradas
const particleContainer = document.createElement("div");
particleContainer.id = "particles";
document.body.appendChild(particleContainer);

for (let i = 0; i < 40; i++) {
  const p = document.createElement("div");
  p.classList.add("particle");
  const size = Math.random() * 6 + 3;
  p.style.width = `${size}px`;
  p.style.height = `${size}px`;
  p.style.left = `${Math.random() * 100}%`;
  p.style.animationDuration = `${6 + Math.random() * 10}s`;
  p.style.animationDelay = `${Math.random() * 5}s`;
  particleContainer.appendChild(p);
}

// Música de fondo
const musicBtn = document.getElementById("music-btn");
const music = document.getElementById("bg-music");

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "🔇 Pausar música";
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Reproducir música";
  }
});
