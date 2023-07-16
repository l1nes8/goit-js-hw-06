const input = document.getElementById('validation-input');

input.addEventListener('blur', () => {
    const getWorldNumber = input.value.length
    const validNumber = Number(input.dataset.length)

    input.classList.remove('valid', 'invalid')

    if (getWorldNumber === validNumber) {
        input.classList.add('valid')
    } else {
        input.classList.add('invalid')
    }
})



