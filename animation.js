const bouncingImage = document.querySelector('.bouncing-image');

bouncingImage.addEventListener('click', () => {
  bouncingImage.style.animation = 'none'; // Reset animation
  setTimeout(() => {
    bouncingImage.style.animation = 'bounceIn 3s cubic-bezier(0.25, 1.25, 0.5, 1) forwards'; // Restart animation
  }, 10); // Small delay to reset
});