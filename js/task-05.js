const out_line = document.querySelector('#name-output');
const in_line = document.querySelector('#name-input');
in_line.addEventListener('input', onType);

function onType() {
  if (!in_line.value) out_line.textContent = 'Anonymous';
  else out_line.textContent = in_line.value;
}
