const input_line = document.querySelector('#validation-input');
input_line.addEventListener('blur', onCheck);

function onCheck() {
  if (input_line.value.length === Number(input_line.dataset.length)) {
    input_line.classList.remove('invalid');
    input_line.classList.add('valid');
  } else input_line.classList.add('invalid');
}
