function setFormMessage(formElement, tyoe, message){
    const messageElement = formElement.querySelector("form__message");
messageElement.textContent = message;
messageElement.classList.remove("form__message--succss", "form__message--error");
messageElement.classList.add('form__message--${type}');
}

document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
});

document.querySelector("#linkCreateAccount") .addEventListener("click", e => {
   e.preventDefault();
    loginForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");
});

document.querySelector("#linkLogin") .addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
});