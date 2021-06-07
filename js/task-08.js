const createBoxes = (amount) => {
    const boxesDiv = document.querySelector('#boxes');
    const arrayDivs = [];
    if(boxesDiv.children.length){
        destroyBoxes()
    }
    for (let i = 0; i < amount; i++){
        const rgbDiv = `rgb(${Math.random() * 255 << 0}, ${Math.random() * 255 << 0}, ${Math.random() * 255 << 0})`;
        const sizeDiv = `${30 + i * 10}px`;

        const createElDiv = document.createElement('div');
        createElDiv.style.backgroundColor = rgbDiv;
        createElDiv.style.width = sizeDiv;
        createElDiv.style.height = sizeDiv;
        createElDiv.className = "create-div";
        arrayDivs.push(createElDiv);
    }
    boxesDiv.append(...arrayDivs);
}

const destroyBoxes = () => {
    document.querySelectorAll('.create-div').forEach(el => {
        el.remove();
    });
}

const inputEl = document.querySelector('[type="number"]');
    
document.querySelector('[data-action="render"]').addEventListener('click', ev => {
    createBoxes(inputEl.value)
    inputEl.value = 0;
})

document.querySelector('[data-action="destroy"]').addEventListener('click', ev => {
    destroyBoxes();
    inputEl.value = 0;
})

