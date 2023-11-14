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
  const sliderWrapper = document.querySelector('.projectes__slider-wrapper');
  const slider = document.querySelector('.projectes__slider');
  const dots = document.querySelectorAll('.projectes__dot');
  let currentSlide = 0;

  function showSlide(index) {
    const slideWidth = slider.clientWidth;
    const newPosition = -index * slideWidth;
    slider.style.transform = `translateX(${newPosition}px)`;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % dots.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + dots.length) % dots.length;
    showSlide(currentSlide);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
  });
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

// pop-up
function openPopup() {
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function submitForm(event) {
  // Implement form submission logic here
  // You can validate the form fields and show error messages accordingly
  event.preventDefault();
}
