const redButton = document.querySelector('.but1');
const blueButton = document.querySelector('.but2');



function changeColorToRed(){
    document.querySelector('h1').style.color='red';
    // document.querySelector('h1').classList.toggle('red');
}




function changeColorToBlue(){
    document.querySelector('h1').classList.toggle('blue');
}

redButton.addEventListener('click', changeColorToRed);
blueButton.addEventListener('click', changeColorToBlue);