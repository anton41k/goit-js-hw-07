const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulEls = document.querySelector('#ingredients');
let listLi = ingredients.map(el => {
  const createElLi = document.createElement('li');
  createElLi.textContent = el;
  return createElLi;
});

ulEls.append(...listLi);
