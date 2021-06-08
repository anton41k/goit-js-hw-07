const changeClass = (element, addCls, removeCls) => {
  element.classList.add(addCls);
  element.classList.remove(removeCls);
};

document.querySelector('#validation-input').addEventListener('blur', ev => {
  const inputEl = ev.currentTarget;
  const lenValueInput = inputEl.value.length;
  const lenValueValid = inputEl.getAttribute('data-length');
  if (lenValueInput == lenValueValid) {
    changeClass(inputEl, 'valid', 'invalid');
  } else {
    changeClass(inputEl, 'invalid', 'valid');
  }
});
