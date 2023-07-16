const value = document.getElementById('value')
const btnDecrement = document.querySelector('[data-action="decrement"]')
const btnIncrement = document.querySelector('[data-action="increment"]')

let currentValue = 0;

btnDecrement.addEventListener("click", decrement); 
btnIncrement.addEventListener("click", increment);

function updateValue () {
    value.textContent = currentValue;
  };

function decrement () {
    currentValue -= 1 
    updateValue()
};

function increment () {
    currentValue += 1 
    updateValue()
};

updateValue();

