let counterValue = 0;

const span = document.querySelector('#value');

const button_inc = document.querySelector('button[data-action="increment"]');
button_inc.addEventListener('click', incrClick);

const button_dec = document.querySelector('button[data-action="decrement"]');
button_dec.addEventListener('click', decrClick);

function incrClick() {
  counterValue++;
  span.textContent = counterValue;
}

function decrClick() {
  counterValue--;
  span.textContent = counterValue;
}
