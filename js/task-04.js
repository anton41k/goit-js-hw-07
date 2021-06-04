let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector('#value');

const increment = () => {
    counterValue += 1;
}
const decrement = () => {
    counterValue -= 1;
}

decrementBtn.addEventListener('click', evt => {
    decrement();
    spanEl.textContent = counterValue;
})

incrementBtn.addEventListener('click', evt => {
    increment();
    spanEl.textContent = counterValue;
})


/*const counter = (el, z) => {
    el.addEventListener('click', evt => {
        z ? counterValue += 1 : counterValue -= 1;
        spanEl.textContent = counterValue;
    })
}

counter(decrementBtn, false)
counter(incrementBtn, true)*/