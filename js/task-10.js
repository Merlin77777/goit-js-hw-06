function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector('button[data-create]').addEventListener('click', handleCreate);
document.querySelector('button[data-destroy]').addEventListener('click', handleDestroy);

const container = document.querySelector('#boxes');

function handleCreate() {
  const count = Number(document.querySelector('#controls').children[0].value);
  createBoxes(count);
}

function createBoxes(amount) {
  let size = 30;
  let text = '';
  for (let i = 0; i < amount; i++) {
    const rndColor = getRandomHexColor();
    text += `<div style="width: ${size}px; height: ${size}px; background-color: ${rndColor};"></div>`;
    size += 10;
  }
  container.innerHTML = text;
}

function handleDestroy() {
  container.innerHTML = '';
}
