// exerciseTitle('Friday exercise: Password checker');

const form = document.querySelector('#password-checker-form');
const passwordCriteria = document.querySelector('.password-criteria').children;

let password = 0;
let SUM_OF_POINTS = 0;
let NUMBERS_OF_RULES_ENFORCED = 0;
let percentage = 0;


function isLongerThan8Characters() {
    password = form.elements['password'].value;

    if(password.length > 8){
        // alert ('The password should have at least 8 characters'); 
        SUM_OF_POINTS  = SUM_OF_POINTS + 10;
        NUMBERS_OF_RULES_ENFORCED = NUMBERS_OF_RULES_ENFORCED + 1;

        passwordCriteria[0].style.color ='green';
    }else{
        passwordCriteria[0].style.color ='red';
    }
}

function containsLowercaseLetter() {
    let regex = /[a-z]/g;
    if(password.match(regex)){
        // alert ('The password should have at least 1 lowercase letter');
        SUM_OF_POINTS  = SUM_OF_POINTS + 5;
        NUMBERS_OF_RULES_ENFORCED = NUMBERS_OF_RULES_ENFORCED + 1;

        passwordCriteria[1].style.color ='green';
    }else{
        passwordCriteria[1].style.color ='red';
    }
    
}

function containsUppercaseLetter() {
    let regex = /[A-Z]/g;
    if(password.match(regex)){
        // alert ('The password should have at least 1 uppercase letter');
        SUM_OF_POINTS  = SUM_OF_POINTS + 5;
        NUMBERS_OF_RULES_ENFORCED = NUMBERS_OF_RULES_ENFORCED + 1;

        passwordCriteria[2].style.color ='green';
    }else{
        passwordCriteria[2].style.color ='red';
    }
}

function containsADigit() {
    let regex = /[0-9]/g;
    if(password.match(regex)){
        // alert ('The password should have at least 1 digit');
        SUM_OF_POINTS  = SUM_OF_POINTS + 5;
        NUMBERS_OF_RULES_ENFORCED = NUMBERS_OF_RULES_ENFORCED + 1;

        passwordCriteria[3].style.color ='green';
    }else{
        passwordCriteria[3].style.color ='red';
    }
}

function containsASymbol() {
    let regex = /[^\w]/g;
    if(password.match(regex)){
        // alert ('The password should have at least 1 symbol');
        SUM_OF_POINTS  = SUM_OF_POINTS + 10;
        NUMBERS_OF_RULES_ENFORCED = NUMBERS_OF_RULES_ENFORCED + 1;

        passwordCriteria[4].style.color ='green';
    }else{
        passwordCriteria[4].style.color ='red';
    }

}

function containsFiveUniqueCharacters() {
    let regex = /[#?!@$%^&*-].{4,}$/g;
    if(password.match(regex)){
        // alert ('The password should have at least 5 unique characters');
        SUM_OF_POINTS  = SUM_OF_POINTS + 5;
        NUMBERS_OF_RULES_ENFORCED = NUMBERS_OF_RULES_ENFORCED + 1;

        passwordCriteria[5].style.color ='green';
    }else{
        passwordCriteria[5].style.color ='red';
    }
}

function checkPassword(password) {
    let percentage = SUM_OF_POINTS + NUMBERS_OF_RULES_ENFORCED *10;
    console.log(percentage);

    const passwordStrengthBar = document.querySelector('.password-strength-bar');
    passwordStrengthBar.style.width = `${percentage}%`;

    if(percentage <= 50){
        passwordStrengthBar.style.backgroundColor = 'red';
    } else if(percentage <= 75){
        passwordStrengthBar.style.backgroundColor = 'orange';
    }else if(percentage < 100){
        passwordStrengthBar.style.backgroundColor = 'yellow';
    }else if(percentage === 100){
        passwordStrengthBar.style.backgroundColor = 'green';
    }
}

form.addEventListener('submit', (element) => {
    element.preventDefault();   
    isLongerThan8Characters();
    containsLowercaseLetter();
    containsUppercaseLetter();
    containsADigit();
    containsASymbol();
    containsFiveUniqueCharacters();
    checkPassword();
})
