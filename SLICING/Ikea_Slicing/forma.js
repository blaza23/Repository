document.addEventListener("DOMContentLoaded", function () {
    init()
});
const form = document.querySelector('.js-form');
const form2 = document.querySelector('.js-form-2');
const submit = document.querySelector('.js-submit-button');
const submit2 = document.querySelector('.js-submit-button2');
const cardNumberInput = form2.elements['cardNumber'];
const ccv = form2.elements['ccv'];
const date = form2.elements['expirationDate'];
const init = () => {
    bindEventListeners();
}
const bindEventListeners = () => {
    submit.addEventListener('click', submitForm);
    cardNumberInput.addEventListener('input', cardNumberValidation);
    ccv.addEventListener('input', ccvValidation);
    date.addEventListener('input', dateVlaidation);
}
const submitForm = (event) => {
    event.preventDefault();
    nameValidation();
    surnameValidation();
    streetValidation();
    cityValidation();
    emailValidation();
    phoneVlaidation();
    privacyValidation();
}
const submitForm2 = (event) => {
    event.preventDefault();
    cardNumberValidation();
}
const nameValidation = () => {
    const name = form.elements['name'];
    console.log(name.value);
    if(name.value === '') {
        alert('Moraš upisati svoje ime!');
        return false;
    }
    else {
        return true;
    }
}
const surnameValidation = () => {
    const surname = form.elements['surname'];
    if(surname.value === '') {
        alert('Moraš upisati svoje prezime!');
        return false;
    }
    else {
        return true;
    }
}
const streetValidation = () => {
    const street = form.elements['street'];
    if(street.value === '') {
        alert('Moraš upisati svoju ulicu!');
        return false;
    }
    else {
        return true;
    }
}
const cityValidation = () => {
    const city = form.elements['city'];
    if(city.value === '') {
        alert('Moraš upisati grad!');
        return false;
    }
    else {
        return true;
    }
}
const emailValidation = () => {
    const email = form.elements['email'];
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if( email.value === '') {
        alert('Unesi e-mail adresu!');
        return false;
    }
    else if (!regex.test(email.value)) {
        alert('Unesi ispravnu e-mail adresu!');
        return false;
    } 
    else {
        return true;
    }
}
const phoneVlaidation = () => {
    const phone = form.elements['phone'];
    let regexx = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    if(phone.value === '') {
        alert('Unesi broj telefona!');
        return false;
    }
    else if(!regexx.test(phone.value)) {
        alert('Unesi ispravan broj telefona!');
        return false;
    }
    else {
        return true;
    }
}
const privacyValidation = () => {
    const privacy = form.elements['privacyPolicy'];
    if(!privacy.checked) {
        alert('Za nastavak morate se složiti s uvjetima naših Pravila o zaštiti podataka!');
        return false;
    }
    else {
        return true;
    }
}
const cardNumberValidation = (event) => {
    event.target.value = event.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
}
const ccvValidation = (event) => {
    event.target.value = event.target.value.replace(/[^\dA-Z]/g, '');
}
const dateVlaidation = (event) => {
    event.target.value = event.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{2})/, '$1/').trim();
}

















