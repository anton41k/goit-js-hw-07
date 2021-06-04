const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', evt => {
    spanEl.textContent = inputEl.value ? inputEl.value : 'незнакомец';
})