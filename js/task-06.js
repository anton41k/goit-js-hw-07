document.querySelector('#validation-input').addEventListener('blur', ev => {
  const inputEl = ev.currentTarget;
  const lenValueInput = inputEl.value.length;
  const lenValueValid = inputEl.getAttribute('data-length');
  if (lenValueInput == lenValueValid) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});
