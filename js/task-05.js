const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

const onInputTrarget = (event) => {
     nameOutput.textContent =  nameInput.value.trim() || "Anonymous"
    //  nameInput.value 
    // event.currentTarget.value
}

nameInput.addEventListener('input', onInputTrarget)

