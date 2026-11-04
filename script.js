// Wedding date: November 26, 2026. Change the time if the muhurtham time is confirmed.
const weddingDate = new Date("2026-11-26T09:00:00+05:30");

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;
  if (diff <= 0) {
    ["days", "hours", "minutes", "seconds"].forEach(id => document.getElementById(id).textContent = "00");
    document.getElementById("countdownNote").textContent =
      diff > -86400000 ? "Today is the wedding day! शुभमस्तु ♥" : "The celebration has begun. Thank you for being part of it!";
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Open-invitation interaction
const toast = document.getElementById("toast");
document.getElementById("openInvite").addEventListener("click", () => {
  document.getElementById("story").scrollIntoView({ behavior: "smooth" });
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
});

// Mobile navigation
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach(link => link.addEventListener("click", () => {
  document.getElementById("navLinks").classList.remove("open");
}));

// Music: browsers require a visitor to tap Play before audio can start.
const music = document.getElementById("weddingMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicLabel.textContent = "Pause music";
    } catch (error) {
      musicLabel.textContent = "Add MP3 first";
      toast.textContent = "Add your MP3 as music/wedding-music.mp3";
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 3000);
    }
  } else {
    music.pause();
    musicLabel.textContent = "Play music";
  }
});

// Gentle reveal on scroll
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Gallery tile click gives a simple full-screen-style caption message.
document.querySelectorAll(".gallery-tile").forEach(tile => {
  tile.addEventListener("click", () => {
    toast.textContent = tile.dataset.caption;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2200);
  });
});
