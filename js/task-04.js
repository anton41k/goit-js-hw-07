let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector('#value');

const increment = () => {
    counterValue += 1;
    spanEl.textContent = counterValue;
}
const decrement = () => {
    counterValue -= 1;
    spanEl.textContent = counterValue;
}

decrementBtn.addEventListener('click', decrement)

incrementBtn.addEventListener('click', increment)


/*const counter = (el, sign) => {
    el.addEventListener('click', evt => {
        sign ? counterValue += 1 : counterValue -= 1;
        spanEl.textContent = counterValue;
    })
}

counter(decrementBtn, false)
counter(incrementBtn, true)*/