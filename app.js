const buttonPlay = document.getElementById("play");

const wadah = document.getElementById("wadahVideo");
const video = document.getElementById("videoJumpscare");

    buttonPlay.addEventListener("click", () => {
      // 1. Munculkan wadah video ke tengah layar
      wadah.style.display = "flex";

      // 2. Pastikan suara tidak di-mute dan set volume ke maksimal (1.0 = 100%)
      video.muted = false;
      video.volume = 1.0;

      // 3. Putar video dari awal
      video.currentTime = 0;
      video.play();

      // Opsional: Masuk mode fullscreen browser otomatis
      if (wadah.requestFullscreen) {
        wadah.requestFullscreen();
      }
    });