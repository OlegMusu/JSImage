const lazyImages = document.querySelectorAll('img[data-src]');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const img = entry.target;
        if (entry.isIntersecting) {
            if (!img.src) {
                img.src = img.dataset.src;
            }
            img.classList.add('visible');
        } 
        else {
            // це для того щоб картинки могли пропадати коли ти гортаєш до низу
            img.classList.remove('visible'); 
        }
    });
}, {
    root: null,
    threshold: 0.3
});

lazyImages.forEach(img => {
    observer.observe(img);
});