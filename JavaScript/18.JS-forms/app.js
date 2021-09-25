document.addEventListener("DOMContentLoaded", function () {
    initial();
});
const initial = () => {
    bindEventListenets();
}
const form = document.querySelector('.form-validation');
const toast = document.querySelector('.toast');
const toastTitle = document.querySelector('.toast-title');
const toastContent = document.querySelector('.toast-content');
const toastCloseButton = document.querySelector('.toast-closeButton');
const passwordInput = document.querySelector('#password');
const nameInput = document.querySelector('#name');

const bindEventListenets = () => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        usernameValidation();
        passwordValidation();
        matchPasswordValidation();
        emailValidation();
        if(usernameValidation() == false || passwordValidation() == false || matchPasswordValidation() == false || emailValidation() == false){
            toast.classList.remove('hidden');
        }
        else {
            toastTitle.innerHTML = `SUCCESS!`;
            toastContent.innerHTML = ``;
            toast.style.border = '1px solid green';
            toast.style.backgroundColor = 'green';
            toast.classList.remove('hidden');
        }
    });
    toastCloseButton.addEventListener('click', closeToast);

    passwordInput.addEventListener('keydown', checkPassword);

    nameInput.addEventListener('keydown', checkName);
}
const usernameValidation = () => {
    const username = form.elements['username'];
    if(username.value.length < 8) {
        // alert('Username needs to be at least 8 simbols long!');
        return false;
    }
    else {
        return true;
    }
}
const matchPasswordValidation = () => {
    const password = form.elements['password'];
    const password2 = form.elements['password2'];
    if (password.value !== password2.value) {
        // alert('Password must match the rentered password!');
        return false;
    }
    else {
        return true;
    }
}
const passwordValidation = () => {
    const password = form.elements['password'];
    let regex = new RegExp("^.*(?=.*[!?@#$%^&+=]).*$");
    if(password.value.length < 11) {
        // alert('Password must have at least 12 symbols');
        return false;
    }
    else if(!regex.test(password.value)) {
        // alert('Password must contain at least one special sign');
        console.log(regex.test(password.value));
        return false;
    }
    else {
        return true;
    }
}
const emailValidation = () => {
    const email = form.elements['email'];
    let regex = new RegExp('^[^ ]+@[^ ]+\.[a-z]{2,3}$');
    if(!regex.test(email.value)) {
        // alert('Email address should be in correct format!');
        return false;
    }
    else {
        return true;
    }
}
const closeToast = () => {
    toast.classList.add('hidden');
}

const checkPassword = (event) => {
    if(event.target.value.length < 12){
        passwordInput.style.borderColor = 'red';
    }
    else{
        passwordInput.style.borderColor = 'green';
    }
}

const checkName = (event) => {

    if(event.keyCode === 85){
        event.preventDefault();
        nameInput.style.borderColor='red';
    }
}