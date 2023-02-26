const images = document.querySelectorAll('img[data-src]');

const options = {
  rootMargin: '0px 0px 50px 0px',
  threshold: 0.1
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.setAttribute('src', img.getAttribute('data-src'));
      img.classList.add('loaded');
      observer.unobserve(img);
    }
  });
}, options);

images.forEach(image => {
  observer.observe(image);
});


