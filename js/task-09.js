const body = document.body;
const text = document.querySelector('.color');
const btn = document.querySelector('.change-color');


btn.addEventListener('click', () => {
    text.textContent = getRandomHexColor();
    body.style.backgroundColor = getRandomHexColor()
})

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }