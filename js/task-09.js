const body = document.body;
const text = document.querySelector('.color');
const btn = document.querySelector('.change-color');


btn.addEventListener('click', () => {
    const color = getRandomHexColor();
    text.textContent = color;
    body.style.backgroundColor = color;
})

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }