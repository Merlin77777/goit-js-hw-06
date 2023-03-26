function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
button.addEventListener('click', changeColor);
const colorValue = document.querySelector('.color');

function changeColor() {
  const hexColor = getRandomHexColor();
  colorValue.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
}
