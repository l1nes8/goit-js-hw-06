const form = document.querySelector('.login-form')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const emailInput = form.elements.email;
    const passwordInput =  form.elements.password;

   if(emailInput.value === '' || passwordInput.value === '') {
    alert("All fields must be filled!");
    return
   }

   const formField = {
    email: emailInput.value,
    password: passwordInput.value,
   }

   console.log(formField)
    form.reset()
});

