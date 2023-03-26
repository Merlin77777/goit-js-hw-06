const slider = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');
slider.addEventListener('input', newSize);

function newSize() {
  textSize.style.fontSize = `${slider.value}px`;
}
