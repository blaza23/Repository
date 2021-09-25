let button = document.querySelector('.guessButton');
let numInput = document.querySelector('.numInput');

function randomNumber(){
    let rndNum = Math.ceil(Math.random()* (100-0)+0);
    console.log(rndNum);
    return rndNum;
}

function moreLess(){
    if (numInput.value == randomNumber()){
    document.querySelector('#someId').style.display ='block';

//     function playAgain(){
  
// }
// document.querySelector('.guessButton').addEventListener('click',playAgain);


} else if (numInput.value < randomNumber()) {

    alert('More');
} else {
    alert('Less');
}
}

button.addEventListener('click', randomNumber);
numInput.addEventListener('change', moreLess);



