function toggleSubTitle(button) {
  const subTitle = button.querySelector('.vragen__sub-title');
  const iconImage = button.querySelector('.icon-image');

  subTitle.classList.toggle('visible');
  if (subTitle.classList.contains('visible')) {
    iconImage.src = "img/vragen/minus.svg"; // Змінити на іконку "мінус"
  } else {
    iconImage.src = "img/vragen/plus.svg"; // Змінити на стандартну іконку "плюс"
  }
}
