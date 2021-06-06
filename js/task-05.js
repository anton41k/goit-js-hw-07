document.querySelector('#name-input').addEventListener('input', ev => {
    const spanEl = document.querySelector('#name-output');
    const inputEl = ev.currentTarget;
    spanEl.textContent = inputEl.value ? inputEl.value : 'незнакомец';
})