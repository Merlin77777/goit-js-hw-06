const form = document.querySelector('.login-form');
form.addEventListener('submit', formCheck);

function formCheck(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (!email.value || !password.value) alert('Всі поля повинні бути заповнені!!!');
  else {
    console.log({ email: email.value, password: password.value });
    evt.currentTarget.reset();
  }
}
