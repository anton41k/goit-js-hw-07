const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulEls = document.querySelector('#ingredients');
let listLi = [];
//const createElLi = ingredients.forEach(el => {
for(let i = 0; i<ingredients.length; i++){
  const createElLi= `<li>${ingredients[i]}</li>`;
  listLi.push(createElLi)
  console.log(createElLi)
}
console.log(ulEls)
console.log( listLi.join(''))
const createElLi = document.createElement('li');
ulEls.appendChild(createElLi)