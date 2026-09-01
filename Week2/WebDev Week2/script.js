const galleryImages = [
  'anya.jpeg',
  'di.jpg',
  'download.jpeg',
  'download (3).jpeg',
  'elena the avalor.webp',
  'rapunzel2.jpg',
  'rapunzel6.jpg',
  'shinchan wallpaper.webp'
];

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeLightboxButton = document.getElementById('closeLightbox');

function createGalleryItem(src, index) {
  const item = document.createElement('button');
  item.type = 'button';
  item.className = 'gallery-item';
  item.setAttribute('aria-label', `Open image ${index + 1}`);

  const img = document.createElement('img');
  img.src = src;
  img.alt = `Gallery image ${index + 1}`;

  item.appendChild(img);
  item.addEventListener('click', () => {
    lightboxImage.src = src;
    lightboxImage.alt = `Gallery image ${index + 1}`;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  });

  return item;
}

galleryImages.forEach((src, index) => {
  gallery.appendChild(createGalleryItem(src, index));
});

closeLightboxButton.addEventListener('click', () => {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
});

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox.classList.contains('open')) {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  }
});
