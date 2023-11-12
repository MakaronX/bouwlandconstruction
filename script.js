// yellow scroll
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const documentHeight = document.body.clientHeight;
  const windowHeight = window.innerHeight;
  const progress = (scrollTop / (documentHeight - windowHeight)) * 100;

  document.getElementById('progress-bar').style.width = progress + '%';
});

// PROJECTEN slider
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.projectes__image');
  const dots = document.querySelectorAll('.projectes__dot');
  let currentIndex = 0;
  let isTransitioning = false;

  function showImage(index) {
    if (isTransitioning) return;
    isTransitioning = true;

    images.forEach((image) => (image.style.display = 'none'));
    dots.forEach((dot) => (dot.style.backgroundColor = 'gray'));
    images[index].style.display = 'block';
    dots[index].style.backgroundColor = 'darkgray';

    images[index].style.opacity = 0;
    images[index].style.transition = 'opacity 0.5s';
    setTimeout(() => {
      images[index].style.opacity = 1;
      isTransitioning = false;
    }, 0);
  }

  showImage(currentIndex);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', function () {
      if (isTransitioning) return;
      currentIndex = index;
      showImage(currentIndex);
    });
  });

  function nextImage() {
    if (isTransitioning) return;
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    if (isTransitioning) return;
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
});


// FAQ button
function toggleSubTitle(button) {
  const subTitle = button.querySelector('.faq__sub-title');
  const iconImage = button.querySelector('.icon-image');

  subTitle.classList.toggle('visible');
  if (subTitle.classList.contains('visible')) {
    iconImage.src = "img/faq/minus.svg";
  } else {
    iconImage.src = "img/faq/plus.svg";
  }
}

