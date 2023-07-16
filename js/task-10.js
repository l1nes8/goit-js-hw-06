const input = document.querySelector('#controls input')
const btnCreate = document.querySelector('[data-create]')
const btnDestroy = document.querySelector('[data-destroy]')
const boxesContainer = document.querySelector('#boxes')

btnCreate.addEventListener('click', createBoxes)
btnDestroy.addEventListener('click', destroyBoxes)

function createBoxes () {
  const amount = Number(input.value)
  const boxes = []

  for(let i = 0; i < amount; i += 1) {
     const size = 30 + i * 10;
     const color = getRandomHexColor();
     const box = document.createElement('div');
     box.style.width = `${size}px`;
     box.style.height = `${size}px`;
     box.style.backgroundColor = color;
     boxes.push(box);
    }

    boxesContainer.append(...boxes)
}

function destroyBoxes() {
    boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
