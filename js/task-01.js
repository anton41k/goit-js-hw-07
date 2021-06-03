const itemEls = document.querySelectorAll(".item");
console.log(`В списке ${itemEls.length} категории.`);

itemEls.forEach((el, idx) => {
    const titleEl = el.querySelector('h2').textContent;
    const lenlist = el.querySelectorAll('li').length;
    console.log(`Категория ${idx+1}: ${titleEl}`);
    console.log(`Количество элементов: ${lenlist}`);
});

