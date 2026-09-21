const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const closeButton = document.querySelector('.lightbox-close');

document.querySelectorAll('.work-button').forEach((button) => {
  button.addEventListener('click', () => {
    const image = button.querySelector('img');
    lightboxImage.src = button.dataset.full;
    lightboxImage.alt = image.alt;
    lightbox.showModal();
  });
});

closeButton.addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
lightbox.addEventListener('close', () => {
  lightboxImage.src = '';
});
document.querySelector('#year').textContent = new Date().getFullYear();
