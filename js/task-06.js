
document.querySelector('#validation-input').addEventListener('blur', ev => {
    const elem = ev.currentTarget;
    const valueInputLen = elem.value.length;
    const dataLen = elem.getAttribute('data-length');
    if (valueInputLen <= dataLen) {
        elem.classList.add('valid');
        elem.classList.remove('invalid');
    }
    else {
        elem.classList.remove('valid');
        elem.classList.add('invalid');
    }
})

