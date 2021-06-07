const itemEls = document.querySelectorAll('.item');
console.log(`В списке ${itemEls.length} категории.`);

itemEls.forEach((el, idx) => {
  const textTitle = el.querySelector('h2').textContent;
  const lenListLi = el.querySelectorAll('li').length;
  console.log(`Категория ${idx + 1}: ${textTitle}`);
  console.log(`Количество элементов: ${lenListLi}`);
});
