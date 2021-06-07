document.querySelector('#font-size-control').addEventListener('input', ev => {
  const rangeInput = ev.currentTarget.value;
  document.querySelector('#text').style.fontSize = `${rangeInput}px`;
});
