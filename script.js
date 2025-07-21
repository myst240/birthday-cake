window.addEventListener('DOMContentLoaded', () => {
  const flames = document.querySelectorAll('.flame');
  const candles = document.querySelectorAll('.candle');
  const blowSound = document.getElementById('blowSound');
  const bgMusic = document.getElementById('bgMusic');
  const topLayer = document.querySelector('.cake-layer.top');

  let blown = false;

  topLayer.addEventListener('click', () => {
    if (!blown) {

      flames.forEach(flame => {
        flame.style.opacity = 0;
        flame.style.animation = 'none';
      });

      blowSound.currentTime = 0;
      blowSound.play().catch(e => console.error("Blow sound error:", e));

      bgMusic.play().catch(e => console.error("Music error:", e));

      blown = true;

      setTimeout(() => {
        flames.forEach(flame => {
          flame.style.opacity = 1;
          flame.style.animation = 'flicker 0.3s infinite ease-in-out alternate';
        });
        blown = false;
      }, 4000);
    }
  });
});