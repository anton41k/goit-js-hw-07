const spanEl = document.querySelector('#name-output');

document.querySelector('#name-input').addEventListener('input', ev => {
  const inputEl = ev.currentTarget;
  spanEl.textContent = inputEl.value ? inputEl.value : 'незнакомец';
});
