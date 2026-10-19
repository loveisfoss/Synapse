/* Photo gallery lightbox */
  function openLightbox(slot) {
    var img = slot.querySelector('img');
    if (!img) return;
    document.getElementById('lightbox-img').src = img.dataset.full || img.src;
    document.getElementById('lightbox-img').alt = img.alt;
    document.getElementById('lightbox').classList.add('open');
  }
  function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });
